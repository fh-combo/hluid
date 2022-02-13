import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// Vue.config.productionTip = false;
import components from './common/index';

export default async ({
    Vue
}) => {
    if (typeof process === 'undefined') {
        Vue.use(ElementUI)
        Vue.use(components);
    }
}