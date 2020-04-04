<script>
  import Datepicker from 'vuejs-datepicker';
  import { en, ru } from 'vuejs-datepicker/dist/locale';
  import { propValidator } from '@/utils/helpers';

  const LOCALES = { en, ru };

  const languageValidator = propValidator('language', Object.keys(LOCALES));

  export default {
    name: 'UiDatepicker',
    props: {
      language: {
        type: String,
        default: 'en',
        ...languageValidator,
      },
    },
    computed: {
      internalLanguage() {
        return LOCALES?.[this.language];
      },
    },
    render(h) {
      const language = this.internalLanguage || null;

      return h(Datepicker, {
        props: {
          ...this.$attrs,
          ...language && { language },
        },
      }, this.$slots.default);
    },
  };
</script>
