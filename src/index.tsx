import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import GenerateJokeButton from './components/GenerateJokeButton/GenerateJokeButton';
import GenerateName from './components/GenerateName/GenerateName';
import MainBox from './components/GenerateName/GenerateName';
import NorrisPhoto from './components/NorrisPhoto/NorrisPhoto';
import SelectCategories from './components/SelectCategories/SelectCategories';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App>
      <MainBox>
        <NorrisPhoto />
        <SelectCategories />
        <GenerateName />
        <GenerateJokeButton />
      </MainBox>
    </App>,
  document.getElementById('root')
);


reportWebVitals();