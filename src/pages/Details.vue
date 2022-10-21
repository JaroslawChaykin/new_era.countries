<template>
  <div class="details">
    <div class="buttons">
      <TheButton text="Back" :callback="() => $router.push('/')" />
      <TheButton text="Show modal" :callback="targetModalVisible" />
    </div>

    <TheLoader v-if="getCountryLoading"/>

    <div v-else class="country">

      <TheModal :visible="modalVisible" :targetVisible="targetModalVisible">
        <h1>{{ getCountry.name.official }}</h1>
      </TheModal>

      <div class="flag-image">
        <img :src="getCountry.flags.svg" :alt="getCountry.name.official">
      </div>
      <div class="country-facts">
        <h4 class="country-name">{{ getCountry.name.official }}</h4>

        <div class="country-details">
          <div v-for="detail in details" :key="detail" :class="detail[0]">
            <div v-for="dtl in detail[1]" :key="dtl.name" class="detail country-native-name">
              <span>{{ dtl.name }}: </span>{{ dtl.data }}
            </div>
          </div>
        </div>

        <div class="border-countries">
          Border Countries:
          <router-link v-for="border in getCountry.borders" :key="border" :to="`/details/${border}`">
            <TheButton :text="border" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheLoader from '@/components/TheLoader';
import TheModal from '@/components/TheModal';
import TheButton from '@/components/TheButton';

export default {
  name: 'Details-page',
  components: {TheButton, TheModal, TheLoader},
  data() {
    return {
      modalVisible: false
    };
  },
  computed: {
    ...mapGetters(['getCountry', 'getCountryLoading']),
    currentPath() {
      return this.$route.params.name;
    },
    mapLanguages() {
      return Object.entries(this.getCountry.languages).reduce((acc, language, index) => {
        return Object.keys(this.getCountry.languages).length === ++index
            ? acc + language[1]
            : acc + `${language[1]}, `;
      }, []);
    },
    getCurrencies() {
      const key = Object.keys(this.getCountry.currencies)[0];
      return this.getCountry.currencies[key].name;
    },
    getNativeName() {
      const key = Object.keys(this.getCountry.name.nativeName)[0];
      return this.getCountry.name.nativeName[key].official;
    },
    details() {
      if (!this.getCountryLoading) {
        return [
          [
            'left',
            [
              {name: 'Native Name', data: this.getNativeName},
              {name: 'Population', data: this.getCountry.population.toLocaleString('en')},
              {name: 'Region', data: this.getCountry.region},
              {name: 'Sub Region', data: this.getCountry.subregion},
              {name: 'Capital', data: this.getCountry.capital[0]},
            ]
          ],
          [
            'right',
            [
              {name: 'Top Level Domain', data: this.getCountry.tld[0]},
              {name: 'Currencies', data: this.getCurrencies},
              {name: 'Languages', data: this.mapLanguages},
            ]
          ]
        ];
      }
      return null;
    }
  },
  methods: {
    targetModalVisible() {
      this.modalVisible = !this.modalVisible
    }
  },
  created() {
    this.$store.dispatch('fetchCountryDetails', this.currentPath);
  },
  watch: {
    currentPath() {
      this.$store.dispatch('fetchCountryDetails', this.currentPath);
    }
  }
};
</script>

<style scoped>
.details {
  font-size: 16px;
  width: 100%;
  color: var(--main-text-color);
  padding-bottom: 50px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}
.flag-image {
  margin-right: 100px;
  box-shadow: var(--shadow);
  height: 100%;
}

.flag-image img {
  display: block;
  max-width: 500px;
}

.country {
  display: flex;
}

.country-details {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

span {
  font-weight: 600;
}

.country-facts {
  margin-top: 25px;
  width: 100%;
}

.country-name {
  font-size: 30px;
}
.border-countries {
  margin-top: 50px;
  display: flex;
  align-items: center;
  font-weight: 600;
  flex-wrap: wrap;
  gap: 10px;
}
</style>