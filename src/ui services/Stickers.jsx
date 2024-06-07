import welcomeSticker from './../assets/welcomeSticker.png';
import menuSticker from './../assets/menuSticker.png';
import patienceSticker from './../assets/patienceSticker.png';
import sitSticker from './../assets/sitSticker.png';
import cvSticker from './../assets/cvSticker.png';
import frontendSticker from './../assets/frontendSticker.png';
import backendSticker from './../assets/backendSticker.png';
import reactSticker from './../assets/reactSticker.png';
import helloSticker from './../assets/helloSticker.png';
import educationSticker from './../assets/educationSticker.png';
import experienceSticker from './../assets/experienceSticker.png';
import htmlSticker from './../assets/htmlSticker.png';
import cssSticker from './../assets/cssSticker.png';
import jsSticker from './../assets/jsSticker.png';
import reactsSticker from './../assets/reactsSticker.png';
import reactquerySticker from './../assets/reactquerySticker.png';
import tailwindSticker from './../assets/tailwindSticker.png';
import nextjsSticker from './../assets/nextjs.png';
import nodejsSticker from './../assets/nodejsSticker.png';
import mongoSticker from './../assets/mongoSticker.png';
import expressSticker from './../assets/expressSticker.png';
import reactrouterSticker from './../assets/reactrouterSticker.png';
import creationSticker from './../assets/creationSticker.png';
import thumbupSticker from './../assets/thumbupSticker.png';
import manchesterSticker from './../assets/manchesterSticker.png';
import grassImg from './../assets/grassImg.png'; // img asset
import gateImg from './../assets/gateImg.png'; // img asset
import grassImg2 from './../assets/grassImg2.png'; // img asset
import grassImg3 from './../assets/grassImg3.png'; // img asset
import ballSticker from './../assets/ballSticker.png'; // img asset
import palmSticker from './../assets/palmSticker.png'; // img asset

//
import projectImg0 from '../assets/projectImg0.png';

const sticker = {
  welcome: welcomeSticker,
  hamburger: menuSticker,
  sit: sitSticker,
  patience: patienceSticker,
  CV: cvSticker,
  frontend: frontendSticker,
  backend: backendSticker,
  react: reactSticker,
  hello: helloSticker,
  education: educationSticker,
  experience: experienceSticker,
  html: htmlSticker,
  css: cssSticker,
  js: jsSticker,
  reacts: reactsSticker,
  reactquery: reactquerySticker,
  tailwind: tailwindSticker,
  nextjs: nextjsSticker,
  nodejs: nodejsSticker,
  mongo: mongoSticker,
  reactrouter: reactrouterSticker,
  express: expressSticker,
  creation: creationSticker,
  projectImg: projectImg0,
  thumbup: thumbupSticker,
  manchester: manchesterSticker,
  grassImg: grassImg,
  gateImg: gateImg,
  grassImg2: grassImg2,
  grassImg3: grassImg3,
  ball: ballSticker,
  palm: palmSticker,
};

export default function Stickers({ type, className }) {
  return <img className={className} src={sticker[type]} alt={type} />;
}
