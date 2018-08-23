import './styles.scss';
import helloWorld from './modules/hello_world';

const app = () => {
    try {
        helloWorld();
    } catch (error) {
        console.error(error);
    }

};

window.app = app;
