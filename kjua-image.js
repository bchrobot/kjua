import './kjua-image.html';

import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';
import kjua from 'kjua';

Template.kjuaImage.helpers({
  kjua() {
    const options = _.isString(this) ? { text: this.valueOf() } : this;
    const kjuaImg = $(kjua(options));
    return {
      src: kjuaImg.prop('src'),
      width: kjuaImg.prop('width'),
      height: kjuaImg.prop('height'),
    };
  }
});
