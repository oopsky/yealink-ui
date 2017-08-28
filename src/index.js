import Input from './components/input';

const components = {
    Input
};

const install = function (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(components, {install});