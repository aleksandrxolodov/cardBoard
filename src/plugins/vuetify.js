import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, md } from 'vuetify/iconsets/md';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
  //Использование Google font icons во Vuetify
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md
    }
  }
});
