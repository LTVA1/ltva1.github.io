var GFX = {}, characterSpacingUppercase = [5, 5, 5, 5, 5, 5, 6, 5, 4, 5, 5, 5, 7, 6, 5, 5, 6, 5, 5, 5, 5, 5, 7, 5, 6, 6], characterSpacingLowercase = [5, 5, 5, 5, 5, 6, 5, 5, 4, 4, 5, 4, 7, 5, 5, 5, 5, 5, 5, 4, 5, 5, 7, 5, 5, 5], letterWidth = function (_0x559db8) {
  var _0x48661b = "abcdefghijklmnopqrstuvwxyz".split(""), _0x6d4e5c = {};
  for (var _0x471c07 = 0; _0x471c07 < _0x48661b.length; _0x471c07++) {
    _0x6d4e5c[_0x48661b[_0x471c07]] = _0x471c07;
  }
  if (_0x559db8 == " ") return 3; else return _0x559db8.toLowerCase() == _0x559db8 ? characterSpacingLowercase[_0x6d4e5c[_0x559db8]] + 1 : characterSpacingUppercase[_0x6d4e5c[_0x559db8.toLowerCase()]] + 1;
}, windows = [];

var resolution = 15;
// ??, posX, posY, step, min, max, default
// ElementSlider(this, 0, 4, 110, 0.01, 0, 1, 1)
class ElementSlider {
  constructor(_0x4b62b8, posX, posY, width, step, min, max, defVal) {
    this.parent = _0x4b62b8, this.x = posX ? posX : 0, this.y = posY ? posY : 0, this.width = width ? width : 100, this.step = step ? step : 1, this.min = min ? min : 0, this.max = max ? max : 63, this._value = defVal, this.init = defVal, this.type = "slider", this.onchange = function (_0x4317d2) {};
  }
  ["draw"]() {
    var _0x24fed7 = this.x + this.parent.x + 2, _0x12edf1 = this.y + this.parent.y + 14;
    fill(255), rect(_0x24fed7, _0x12edf1 + 1, this.width, 4), fill(0), rect(_0x24fed7 + 1, _0x12edf1, this.width - 2, 1), rect(_0x24fed7 + 1, _0x12edf1 + 5, this.width - 2, 1), rect(_0x24fed7, _0x12edf1 + 1, 1, 4), rect(_0x24fed7 + this.width - 1, _0x12edf1 + 1, 1, 4);
    var _0x414eb9;
    for (var _0x47291c = windows.length - 1; _0x47291c >= 0; _0x47291c--) {
      if (mouseX >= windows[_0x47291c].x && mouseX <= windows[_0x47291c].x + windows[_0x47291c].width && mouseY >= windows[_0x47291c].y && mouseY <= windows[_0x47291c].y + windows[_0x47291c].height) {
        _0x414eb9 = windows[_0x47291c];
        break;
      }
    }
    var _0x36765b;
    if (_0x414eb9) for (var _0x47291c = _0x414eb9.elements.length - 1; _0x47291c >= 0; _0x47291c--) {
      if (_0x414eb9.elements[_0x47291c].type == "slider") {
        var _0x3752b8 = _0x414eb9.elements[_0x47291c].getThumb(), _0x26980f = _0x414eb9.elements[_0x47291c].getTrack();
        if (mouseX >= _0x3752b8.x && mouseX < _0x3752b8.x + _0x3752b8.width && mouseY >= _0x3752b8.y && mouseY < _0x3752b8.y + _0x3752b8.height) {
          _0x36765b = _0x414eb9.elements[_0x47291c];
          break;
        } else {
          if (mouseX >= _0x26980f.x && mouseX < _0x26980f.x + _0x26980f.width && mouseY >= _0x26980f.y && mouseY < _0x26980f.y + _0x26980f.height) {
            _0x36765b = _0x414eb9.elements[_0x47291c];
            break;
          }
        }
      }
    }
    var _0x35a543 = Math.floor(_0x24fed7 + (this.width - 8) * (this.value - this.min) / (this.max - this.min)), _0x3842fe = _0x12edf1 - 3;
    mouseX >= _0x35a543 && mouseX < _0x35a543 + 8 && mouseY >= _0x3842fe && mouseY < _0x3842fe + 12 && !mouseDragWindow && _0x414eb9 == this.parent && _0x36765b == this && !(mouseDragEl != this && mouseDragEl != null) || mouseDragEl == this ? image(GFX.slider_thumb_, _0x35a543, _0x3842fe) : image(GFX.slider_thumb, _0x35a543, _0x3842fe);
  }
  ["getTrack"]() {
    var _0xf1ce1b = this.x + this.parent.x + 2, _0x1d6eec = this.y + this.parent.y + 14, _0x191280 = {};
    return _0x191280.x = _0xf1ce1b, _0x191280.y = _0x1d6eec, _0x191280.width = this.width, _0x191280.height = 6, _0x191280;
  }
  ["getThumb"]() {
    var _0x26c95e = this.x + this.parent.x + 2, _0x24bc58 = this.y + this.parent.y + 14, _0x3ef510 = {};
    return _0x3ef510.x = Math.floor(_0x26c95e + (this.width - 8) * (this.value - this.min) / (this.max - this.min)), _0x3ef510.y = _0x24bc58 - 3, _0x3ef510.width = 8, _0x3ef510.height = 12, _0x3ef510;
  }
  ["convertX"](_0x55fe2b) {
    var _0x219b84 = this.x + this.parent.x + 2, _0x3ed12b = Math.floor(((_0x55fe2b - _0x219b84) * (this.max - this.min) / (this.width - 8) + this.min) / this.step + 0.5) * this.step;
    return _0x3ed12b < this.min && (_0x3ed12b = this.min), _0x3ed12b > this.max && (_0x3ed12b = this.max), _0x3ed12b;
  }
  get ["value"]() {
    return this._value;
  }
  set ["value"] (_0x5a18d4) {
    var _0x5db275 = {};
    _0x5db275.value = _0x5a18d4, _0x5db275.target = this, this._value = _0x5a18d4, this.onchange(_0x5db275), updateFinalValues();
  }
}
class ElementKnob {
  constructor(_0x1c45fc, _0xe69d5d, _0x3ff670, _0xd0c68a, _0x47e422) {
    this.parent = _0x1c45fc, this.x = _0xe69d5d ? _0xe69d5d : 0, this.y = _0x3ff670 ? _0x3ff670 : 0, this.min = _0xd0c68a ? _0xd0c68a : -1, this.max = _0x47e422 ? _0x47e422 : 1, this._value = 0, this.type = "knob", this.onchange = function (_0x5c5356) {};
  }

  // Drawing the knob
  ["draw"]() {
    var knobPosX = this.x + this.parent.x + 2, knobPosY = this.y + this.parent.y + 14;
    fill(0), image(GFX.wheel, knobPosX, knobPosY);
    for (var _0x5e2fb5 = 0; _0x5e2fb5 < 16; _0x5e2fb5++) {
      for (var _0x38317b = 0; _0x38317b < 16; _0x38317b++) {
        var _0x442b3e = 180 * this.value / this.max, _0x7d157 = 6, _0x395f2f = 1, _0x5bb9a0 = Math.atan2(_0x5e2fb5 - 7.5, 7.5 - _0x38317b) * 180 / Math.PI, _0x1f6f5a = Math.sqrt((_0x5e2fb5 - 7.5) ** 2 + (_0x38317b - 7.5) ** 2);
        _0x1f6f5a >= _0x395f2f && _0x1f6f5a <= _0x7d157 && ((this.value < 0 && _0x5bb9a0 >= _0x442b3e && _0x5bb9a0 < 0 || this.value > 0 && _0x5bb9a0 <= _0x442b3e && _0x5bb9a0 > 0) && rect(knobPosX + _0x5e2fb5, knobPosY + _0x38317b, 1, 1));
      }
    }
  }

  // getting the "hitbox" of the knob
  ["getBody"]() {
    var knobPosX = this.x + this.parent.x + 2, knobPosY = this.y + this.parent.y + 14, _0x20127c = {};
    return _0x20127c.x = knobPosX, _0x20127c.y = knobPosY, _0x20127c.width = 16, _0x20127c.height = 16, _0x20127c;
  }

  // accessors
  get ["value"]() {
    return this._value;
  }
  set ["value"] (value) {
    var _0x4a341b = {};
    _0x4a341b.value = value, _0x4a341b.target = this, this._value = value, this.onchange(_0x4a341b), updateFinalValues();
  }
}

class ElementButtonCopy 
{
  constructor(_0xe975f9, _0x2cbf79, _0x4bc9db) 
  {
    this.parent = _0xe975f9, this.x = _0x2cbf79 ? _0x2cbf79 : 0, this.y = _0x4bc9db ? _0x4bc9db : 0, this.type = "buttoncopy", this.onclick = function (_0x1a43c1) {};
  }

  // Draw
  ["draw"]() 
  {
    var butCpyPosX = this.x + this.parent.x + 2, butCpyPosY = this.y + this.parent.y + 14;
    fill(0), mouseDragEl == this ? image(GFX.button_copy_, butCpyPosX, butCpyPosY) : image(GFX.button_copy, butCpyPosX, butCpyPosY);
  }

  // Hitbox
  ["getBody"]() 
  {
    var butCpyPosX = this.x + this.parent.x + 2, butCpyPosY = this.y + this.parent.y + 14, Body = {};
    return Body.x = butCpyPosX, Body.y = butCpyPosY, Body.width = 27, Body.height = 13, Body;
  }

  // On click
  ["click"]() 
  {
    var _0x31c3da = {};
    _0x31c3da.target = this, this.onclick(_0x31c3da);
  }
}
class ElementButtonDMW 
{
  constructor(_0x306e50, _0x349c9e, _0xd9c087) 
  {
    this.parent = _0x306e50, this.x = _0x349c9e ? _0x349c9e : 0, this.y = _0xd9c087 ? _0xd9c087 : 0, this.type = "buttondmw", this.onclick = function (_0x560fe6) {};
  }
  ["draw"]() 
  {
    var posX = this.x + this.parent.x + 2, posY = this.y + this.parent.y + 14;
    fill(0), mouseDragEl == this ? image(GFX.button_dmw_, posX, posY) : image(GFX.button_dmw, posX, posY);
  }
  ["getBody"]() 
  {
    var butDmwPosX = this.x + this.parent.x + 2, butDmwPosY = this.y + this.parent.y + 14, Body = {};
    return Body.x = butDmwPosX, Body.y = butDmwPosY, Body.width = 31, Body.height = 13, Body;
  }
  ["click"]() 
  {
    var _0x2f3482 = {};
    _0x2f3482.target = this, this.onclick(_0x2f3482);
  }
}

class ElementButtonWAV
{
  constructor(_0x306e50, _0x349c9e, _0xd9c087) 
  {
    this.parent = _0x306e50, this.x = _0x349c9e ? _0x349c9e : 0, this.y = _0xd9c087 ? _0xd9c087 : 0, this.type = "buttonwav", this.onclick = function (_0x560fe6) {};
  }
  ["draw"]() 
  {
    var posX = this.x + this.parent.x + 2, posY = this.y + this.parent.y + 14;
    fill(0), mouseDragEl == this ? image(GFX.button_wav_, posX, posY) : image(GFX.button_wav, posX, posY);
  }
  ["getBody"]() 
  {
    var butDmwPosX = this.x + this.parent.x + 2, butDmwPosY = this.y + this.parent.y + 14, Body = {};
    return Body.x = butDmwPosX, Body.y = butDmwPosY, Body.width = 31, Body.height = 13, Body;
  }
  ["click"]() 
  {
    var _0x2f3482 = {};
    _0x2f3482.target = this, this.onclick(_0x2f3482);
  }
}

class ElementText 
{
  constructor(_0x4c9d76, _0x49b0cc, _0x10d147, text) 
  {
    this.parent = _0x4c9d76, this.x = _0x49b0cc ? _0x49b0cc : 0, this.y = _0x10d147 ? _0x10d147 : 0, this.value = text, this.type = "text";
  }
  ["draw"]() {
    var posX = this.x + this.parent.x + 2, posY = this.y + this.parent.y + 14;
    drawText(this.value, posX, posY);
  }
}

// WIP
var waves = [];

// 0 Sine
waves.push(function(val, obj) {
  return Math.sin(val * obj.final_multiplier + obj.final_phase * Math.PI * 2);
});

// 1 Rectified sine
waves.push(function(val, obj) {
  return Math.max(waves[0](val, obj), 0);
});

// 2 Absolute sine
waves.push(function(val, obj) {
  return Math.abs(waves[0](val, obj));
});

// 3 Quarter sine
waves.push(function(val, obj) {
  return ((val * obj.final_multiplier + obj.final_phase * Math.PI * 2) % Math.PI) <= (Math.PI / 2) ? waves[2](val, obj) : 0;
  //return (val % Math.PI + obj.final_phase) <= Math.PI / 2 ? waves[2](val, obj) : 0;
});

// 4 Squished sine
waves.push(function(val, obj) {
  return waves[0](val, obj) >= 0 ? Math.sin(val * obj.final_multiplier * 2 + obj.final_phase * Math.PI * 4) : 0;
  //return waves[0](val, obj) >= 0 ? waves[0](val * 2, obj) : 0;
});

// 5 Squished Absolute sine
waves.push(function(val, obj) {
  //console.log(val);
  //return ((val * obj.final_multiplier + obj.final_phase * Math.PI * 2) % Math.PI/2) >= 0 ? waves[2](val * 2, obj) : 0;
  // return waves[0](val, obj) >= 0 ? waves[2](val * 2, obj) : 0;
  return Math.abs(waves[4](val, obj));
});

// 6 Sawtooth
waves.push(function(val, obj) {
  return (((val / (Math.PI * 2) * obj.final_multiplier + obj.final_phase) % 1 + 1) % 1 * 2 - 1) /** obj.final_amplitude*/;
});

// 7 Rectified sawtooth
waves.push(function(val, obj) {
  return waves[6](val, obj) < 0 ? waves[6](val, obj) + obj.final_amplitude : 0;
});

// 8 Absolute Sawtooth
waves.push(function(val, obj) {
  return waves[6](val, obj) < 0 ? waves[6](val, obj) + obj.final_amplitude : waves[6](val, obj);
});

// 9 Cubed Sawtooth
waves.push(function(val, obj) {
  return Math.pow(waves[6](val, obj), 3);
});

// 10 Cubed Sine
waves.push(function(val, obj) {
  return Math.pow(waves[0](val, obj), 3);
});

// 11 Rectified Cubed sine
waves.push(function(val, obj) {
  return Math.max(waves[10](val, obj), 0);
});

// 12 Absolute Cubed sine
waves.push(function(val, obj) {
  return Math.abs(waves[10](val, obj));
});

// 13 Quarter Cubed sine
waves.push(function(val, obj) {
  // return (val % Math.PI) <= Math.PI / 2 ? waves[12](val, obj) : 0;
  return Math.pow(waves[3](val, obj), 3);
});

// 14 Squished Cubed sine
waves.push(function(val, obj) {
  //return waves[0](val, obj) >= 0 ? waves[10](val * 2, obj) : 0;
  return Math.pow(waves[4](val, obj), 3);
});

// 15 Squished Absolute Cubed sine
waves.push(function(val, obj) {
  //return waves[0](val, obj) >= 0 ? waves[12](val * 2, obj) : 0;
  return Math.pow(waves[5](val, obj), 3);
});

// 16 Triangle
waves.push(function(val, obj) {
  return (Math.asin(Math.sin(val * obj.final_multiplier + obj.final_phase * Math.PI * 2))) / (Math.PI / 2);
});

// 17 Rectified Triangle
waves.push(function(val, obj) {
  return Math.max(waves[16](val, obj), 0);
});

// 18 Absolute Triangle
waves.push(function(val, obj) {
  return Math.abs(waves[16](val, obj));
});

// 19 Quarter Triangle
waves.push(function(val, obj) {
  return ((val * obj.final_multiplier + obj.final_phase * Math.PI * 2) % Math.PI) <= (Math.PI / 2) ? waves[18](val, obj) : 0;
});

// 20 Squished Triangle
waves.push(function(val, obj) {
  // return waves[0](val, obj) >= 0 ? Math.sin(val * obj.final_multiplier * 2 + obj.final_phase * Math.PI * 4) : 0;
  return waves[0](val, obj) >= 0 ? (Math.asin(Math.sin(val * obj.final_multiplier * 2 + obj.final_phase * Math.PI * 4))) / (Math.PI / 2) : 0;
});

// 21 Squished Absolute Triangle
waves.push(function(val, obj) {
  // return waves[0](val, obj) >= 0 ? waves[18](val * 2, obj) : 0;
  return Math.abs(waves[20](val, obj));
});

// 22 Cubed Triangle
waves.push(function(val, obj) {
  return Math.pow(waves[16](val, obj), 3);
});

// 23 Rectified Cubed Triangle
waves.push(function(val, obj) {
  return Math.max(waves[22](val, obj), 0);
});

// 24 Absolute Cubed Triangle
waves.push(function(val, obj) {
  return Math.abs(waves[22](val, obj));
});

// 25 Quarter Cubed Triangle
waves.push(function(val, obj) {
  // return (val % Math.PI) <= Math.PI / 2 ? waves[24](val, obj) : 0;
  return Math.pow(waves[19](val, obj), 3);
});

// 26 Squished Cubed Triangle
waves.push(function(val, obj) {
  return Math.pow(waves[20](val, obj), 3);
});

// 27 Squished Absolute Cubed Triangle
waves.push(function(val, obj) {
  return Math.pow(waves[21](val, obj), 3);
});

// 28 Square
waves.push(function(val, obj) {
  return Math.sign(waves[0](val, obj));
});

// 29 Rectified Square
waves.push(function(val, obj) {
  return Math.max(waves[28](val, obj), 0);
});

// 30 Quarter Square
waves.push(function(val, obj) {
  //return (val % Math.PI) <= Math.PI / 4 ? waves[28](val * 4, obj) : 0; ?????????????????
  // return Math.sign(waves[3](val, obj));
  return ((val * obj.final_multiplier + obj.final_phase * Math.PI * 2) % Math.PI) <= (Math.PI / 4) ? Math.sign(waves[2](val * 2, obj)) : 0;
});

// 31 Squished Square
waves.push(function(val, obj) {
  //return waves[0](val, obj) >= 0 ? waves[28](val * 2, obj) : 0;
  return Math.sign(waves[4](val, obj));
});



class ElementWindow 
{
  constructor(posX, posY, winType) 
  {
    this.x = posX, this.y = posY, this.width = 255, this.height = 255, this.type = winType, this.closeButton = true, this.multiplier = 1, this.phase = 0, this.amplitude = 1, this.modulation = 1, this.pulseWidth = 0.5, this.distortion = 0, this.cutoff = 1, this.resonance = 0.5, this.mod_multiplier = 0, this.mod_phase = 0, this.mod_amplitude = 0, this.mod_modulation = 0, this.mod_pulseWidth = 0, this.mod_distortion = 0, this.mod_cutoff = 0, this.mod_resonance = 0, this.final_multiplier = 0, this.final_phase = 0, this.final_amplitude = 0, this.final_modulation = 0, this.final_pulseWidth = 0, this.final_distortion = 0, this.final_cutoff = 0, this.final_resonance = 0, this.title = "", this.elements = [], this.inputCount = 0, this.inputs = [], this.outputCount = 0, this.outputs = [], this.checkedOutputs = [], this.inputMapping = [], this.filterInputHistory = [], this.filterOutputHistory = [], this.filterNeedsUpdate = false, this.feedbackHistory = [], this.noiseTable = [], this.waveLength = 64, this.function = function (_0x72ce13, _0x54516d) 
	{
      return 0;
    }, this.updateFinalValues();
	
    if (this.type == "output")
	{
       this.width = 294, this.height = 110;
      var macroSlider = new ElementSlider(this, 0, 4, 110, 0.01, 0, 1, 1), wavLenSlider = new ElementSlider(this, 0, 30, 260, 4, 4, 512, 64);
      var wavResSlider = new ElementSlider(this, 0, 17, 260, 1, 7, 255, 15);
      macroSlider.onchange = function (_0x47a315)
	  {
        //console.log("AMOGUS");
        modulation = _0x47a315.value;
      }, wavLenSlider.onchange = function (_0x3c62ec) 
	  {
        _0x3c62ec.target.parent.waveLength = _0x3c62ec.value;
      }, this.appendNode(macroSlider), this.appendNode(wavLenSlider);
	  
	  wavResSlider.onchange = function (res) {
        resolution = res.value;
      };

      this.appendNode(wavResSlider);
	  
      var btnWaveCopy = new ElementButtonCopy(this, this.width - 3 - 29, 0);
	  
      btnWaveCopy.onclick = function (_0x1b8176) 
	  {
        _0x1b8176.target.parent.createWavetables();
      }, this.appendNode(btnWaveCopy);
	  
      var btnSaveDmw = new ElementButtonDMW(this, 0, 80);
      //var e = new ElementSlider(this, 0, 10, 200, 0.01, 0, 1, 1) // ??, posX, posY, step, min, max, default
      //this.appendNode(e);
      btnSaveDmw.onclick = function (_0x20ea2e) 
	  {
        _0x20ea2e.target.parent.createDMW();
      }, this.appendNode(btnSaveDmw), this.function = function (_0x9df863, _0x44dcbd) 
	  {
        var _0x478606 = 0;
        return _0x44dcbd.inputs[0] && (_0x478606 += _0x44dcbd.inputs[0].function(_0x9df863, _0x44dcbd.inputs[0])), _0x478606 * _0x44dcbd.amplitude;
      }, this.inputCount = 1, this.outputCount = 0, this.title = "Output", this.closeButton = false;

      var btnSaveWav = new ElementButtonWAV(this, 40, 80);
      btnSaveWav.onclick = function (button) 
	  {
      button.target.parent.createWAV();
      }, this.appendNode(btnSaveWav);

    }
	
    if (this.type == "help") 
	{
      this.width = 210, this.height = 368;
      var helpText = new ElementText(this, 0, 0, "Hello!\nThis is an N163\n(and other wavetable synth chips)\nmodular synth for Dn-FamiTracker.\n(And Deflemask and possibly Furnace)\n\nMade by Eulous!\nHacked and deobfuscated by LTVA\nand System64! (Eulous you asshole!)\n\n- Keyboard Shortcuts -\n1 - Sine\n2 - Sawtooth\n3 - Triangle\n4 - Pulse\n5 - Noise\n6 - Pulse Noise\n7 - Oscillator\nShift+5 - Consistent Noise\nShift+6 - Consistent P. Noise\nM - Mixer\nShift+M - Splitter\nI - Inverter\nF - PM Feedback\nP - PM\nR - RM\nG - Gainer\nS - Sync\nQ - Quantization\nB - Bitcrusher\nL - Lowpass Filter\nH - Highpass Filter\n\nDouble-click on a\ncontrol to reset it.");
	  
      this.appendNode(helpText), this.inputCount = 0, this.outputCount = 0, this.title = "Help", this.closeButton = false;
    }
	
    if (this.type == "sine") {
      this.width = 170, this.height = 80, this.function = function (_0x48f883, _0xa7d959) {
        return Math.sin(_0x48f883 * _0xa7d959.final_multiplier + _0xa7d959.final_phase * Math.PI * 2) * _0xa7d959.final_amplitude;
      };
      var _0x9af687 = new ElementSlider(this, 0, 4, 110, 1, 0, 15, 1), _0x15e0d3 = new ElementSlider(this, 0, 17, 110, 0.01, 0, 1, 0), _0x344d32 = new ElementSlider(this, 0, 30, 110, 0.01, 0, 2, 1);
      _0x9af687.onchange = function (_0x4252af) {
        _0x4252af.target.parent.multiplier = _0x4252af.value;
      }, _0x15e0d3.onchange = function (_0x5c7510) {
        _0x5c7510.target.parent.phase = _0x5c7510.value;
      }, _0x344d32.onchange = function (_0x2e13af) {
        _0x2e13af.target.parent.amplitude = _0x2e13af.value;
      }, this.appendNode(_0x9af687), this.appendNode(_0x15e0d3), this.appendNode(_0x344d32);
      var _0x44a157 = new ElementKnob(this, 0, this.height - 32, -12, 12), _0xe58e27 = new ElementKnob(this, 17, this.height - 32, -1, 1), _0x3373a4 = new ElementKnob(this, 34, this.height - 32, -1, 1);
      _0x44a157.onchange = function (_0xf04e3f) {
        _0xf04e3f.target.parent.mod_multiplier = _0xf04e3f.value;
      }, _0xe58e27.onchange = function (_0x2c18db) {
        _0x2c18db.target.parent.mod_phase = _0x2c18db.value;
      }, _0x3373a4.onchange = function (_0xa11286) {
        _0xa11286.target.parent.mod_amplitude = _0xa11286.value;
      }, this.appendNode(_0x44a157), this.appendNode(_0xe58e27), this.appendNode(_0x3373a4), this.outputCount = 1, this.title = "Sine Oscillator";
    }
    
    

    if (this.type == "osc")
    {
      this.width = 170, this.height = 100, this.function = function (_0x48f883, obj) {
        //return Math.pow(Math.sin(_0x48f883 * obj.final_multiplier + obj.final_phase * Math.PI * 2), 3) * obj.final_amplitude;
        return waves[0](_0x48f883, obj) * obj.final_amplitude;
      };
      var _0x9af687 = new ElementSlider(this, 0, 4, 110, 1, 0, 15, 1), _0x15e0d3 = new ElementSlider(this, 0, 17, 110, 0.01, 0, 1, 0), _0x344d32 = new ElementSlider(this, 0, 30, 110, 0.01, 0, 2, 1), waveSlider = new ElementSlider(this, 0, 47, 110, 1, 0, waves.length - 1, 0);
      _0x9af687.onchange = function (_0x4252af) {
        _0x4252af.target.parent.multiplier = _0x4252af.value;
      }, _0x15e0d3.onchange = function (_0x5c7510) {
        _0x5c7510.target.parent.phase = _0x5c7510.value;
      }, _0x344d32.onchange = function (_0x2e13af) {
        _0x2e13af.target.parent.amplitude = _0x2e13af.value;
      }, 
      waveSlider.onchange = function(slider) 
      {
        slider.target.parent.function = function(_0x48f883, obj) {
          return waves[slider.value](_0x48f883, obj) * obj.final_amplitude;
        }
      }
      this.appendNode(_0x9af687), this.appendNode(_0x15e0d3), this.appendNode(_0x344d32), this.appendNode(waveSlider);
      var _0x44a157 = new ElementKnob(this, 0, this.height - 32, -12, 12), _0xe58e27 = new ElementKnob(this, 17, this.height - 32, -1, 1), _0x3373a4 = new ElementKnob(this, 34, this.height - 32, -1, 1);
      _0x44a157.onchange = function (_0xf04e3f) {
        _0xf04e3f.target.parent.mod_multiplier = _0xf04e3f.value;
      }, _0xe58e27.onchange = function (_0x2c18db) {
        _0x2c18db.target.parent.mod_phase = _0x2c18db.value;
      }, _0x3373a4.onchange = function (_0xa11286) {
        _0xa11286.target.parent.mod_amplitude = _0xa11286.value;
      }, this.appendNode(_0x44a157), this.appendNode(_0xe58e27), this.appendNode(_0x3373a4), this.outputCount = 1, this.title = "Oscillator";
    }

    if (this.type == "sawtooth") {
      this.width = 170, this.height = 80, this.function = function (_0x43b5fc, _0xadceb4) {
        return (((_0x43b5fc / (Math.PI * 2) * _0xadceb4.final_multiplier + _0xadceb4.final_phase) % 1 + 1) % 1 * 2 - 1) * _0xadceb4.final_amplitude;
      };
      var _0x9af687 = new ElementSlider(this, 0, 4, 110, 1, 0, 15, 1), _0x15e0d3 = new ElementSlider(this, 0, 17, 110, 0.01, 0, 1, 0), _0x344d32 = new ElementSlider(this, 0, 30, 110, 0.01, 0, 1, 1);
      _0x9af687.onchange = function (_0x1bb3dc) {
        _0x1bb3dc.target.parent.multiplier = _0x1bb3dc.value;
      }, _0x15e0d3.onchange = function (_0x4af3ba) {
        _0x4af3ba.target.parent.phase = _0x4af3ba.value;
      }, _0x344d32.onchange = function (_0x119ec8) {
        _0x119ec8.target.parent.amplitude = _0x119ec8.value;
      }, this.appendNode(_0x9af687), this.appendNode(_0x15e0d3), this.appendNode(_0x344d32);
      var _0x44a157 = new ElementKnob(this, 0, this.height - 32, -12, 12), _0xe58e27 = new ElementKnob(this, 17, this.height - 32, -1, 1), _0x3373a4 = new ElementKnob(this, 34, this.height - 32, -1, 1);
      _0x44a157.onchange = function (_0x4485ae) {
        _0x4485ae.target.parent.mod_multiplier = _0x4485ae.value;
      }, _0xe58e27.onchange = function (_0x356dea) {
        _0x356dea.target.parent.mod_phase = _0x356dea.value;
      }, _0x3373a4.onchange = function (_0x5d86e1) {
        _0x5d86e1.target.parent.mod_amplitude = _0x5d86e1.value;
      }, this.appendNode(_0x44a157), this.appendNode(_0xe58e27), this.appendNode(_0x3373a4), this.outputCount = 1, this.title = "Sawtooth Oscillator";
    }
    if (this.type == "triangle") {
      this.width = 170, this.height = 80, this.function = function (_0x24c2ca, _0x4cb597) {
        return (1 - Math.abs(((_0x24c2ca * _0x4cb597.final_multiplier / (Math.PI * 2) + _0x4cb597.final_phase) % 1 + 1) % 1 * 2 - 1) * 2) * _0x4cb597.final_amplitude;
      };
      var _0x9af687 = new ElementSlider(this, 0, 4, 110, 1, 0, 15, 1), _0x15e0d3 = new ElementSlider(this, 0, 17, 110, 0.01, 0, 1, 0), _0x344d32 = new ElementSlider(this, 0, 30, 110, 0.01, 0, 1, 1);
      _0x9af687.onchange = function (_0x94050d) {
        _0x94050d.target.parent.multiplier = _0x94050d.value;
      }, _0x15e0d3.onchange = function (_0x373880) {
        _0x373880.target.parent.phase = _0x373880.value;
      }, _0x344d32.onchange = function (_0x2576a3) {
        _0x2576a3.target.parent.amplitude = _0x2576a3.value;
      }, this.appendNode(_0x9af687), this.appendNode(_0x15e0d3), this.appendNode(_0x344d32);
      var _0x44a157 = new ElementKnob(this, 0, this.height - 32, -12, 12), _0xe58e27 = new ElementKnob(this, 17, this.height - 32, -1, 1), _0x3373a4 = new ElementKnob(this, 34, this.height - 32, -1, 1);
      _0x44a157.onchange = function (_0x206976) {
        _0x206976.target.parent.mod_multiplier = _0x206976.value;
      }, _0xe58e27.onchange = function (_0x1b7d07) {
        _0x1b7d07.target.parent.mod_phase = _0x1b7d07.value;
      }, _0x3373a4.onchange = function (_0xfc65e7) {
        _0xfc65e7.target.parent.mod_amplitude = _0xfc65e7.value;
      }, this.appendNode(_0x44a157), this.appendNode(_0xe58e27), this.appendNode(_0x3373a4), this.outputCount = 1, this.title = "Triangle Oscillator";
    }
    if (this.type == "noise") {
      this.width = 170, this.height = 54, this.updateNoise(), this.function = function (_0x1530c1, _0x43497a) {
        return (this.noiseTable[Math.floor((_0x1530c1 * 256 / (Math.PI * 2) % 256 + 256) % 256)] * 2 - 1) * _0x43497a.final_amplitude;
      };
      var _0x344d32 = new ElementSlider(this, 0, 4, 110, 0.01, 0, 1, 1);
      _0x344d32.onchange = function (_0x381391) {
        _0x381391.target.parent.amplitude = _0x381391.value;
      }, this.appendNode(_0x344d32);
      var _0x3373a4 = new ElementKnob(this, 0, this.height - 32, -1, 1);
      _0x3373a4.onchange = function (_0x25ed3a) {
        _0x25ed3a.target.parent.mod_amplitude = _0x25ed3a.value;
      }, this.appendNode(_0x3373a4), this.outputCount = 1, this.title = "Random Noise";
    }
    if (this.type == "pulsenoise") {
      this.width = 170, this.height = 54, this.updateNoise(), this.function = function (_0x5c5a48, _0x394a06) {
        return this.noiseTable[Math.floor((_0x5c5a48 * 256 / (Math.PI * 2) % 256 + 256) % 256)] > 0.5 ? _0x394a06.final_amplitude : -_0x394a06.final_amplitude;
      };
      var _0x344d32 = new ElementSlider(this, 0, 4, 110, 0.01, 0, 1, 1);
      _0x344d32.onchange = function (_0x391f7d) {
        _0x391f7d.target.parent.amplitude = _0x391f7d.value;
      }, this.appendNode(_0x344d32);
      var _0x3373a4 = new ElementKnob(this, 0, this.height - 32, -1, 1);
      _0x3373a4.onchange = function (_0x13226c) {
        _0x13226c.target.parent.mod_amplitude = _0x13226c.value;
      }, this.appendNode(_0x3373a4), this.outputCount = 1, this.title = "Random Pulse Noise";
    }
    if (this.type == "noiseconsistent") {
      this.width = 170, this.height = 54, this.updateNoise(), this.function = function (_0x3ef782, _0x26ac78) {
        return (this.noiseTable[Math.floor((_0x3ef782 * 256 / (Math.PI * 2) % 256 + 256) % 256)] * 2 - 1) * _0x26ac78.final_amplitude;
      };
      var _0x344d32 = new ElementSlider(this, 0, 4, 110, 0.01, 0, 1, 1);
      _0x344d32.onchange = function (_0x169d18) {
        _0x169d18.target.parent.amplitude = _0x169d18.value;
      }, this.appendNode(_0x344d32);
      var _0x3373a4 = new ElementKnob(this, 0, this.height - 32, -1, 1);
      _0x3373a4.onchange = function (_0x402b3f) {
        _0x402b3f.target.parent.mod_amplitude = _0x402b3f.value;
      }, this.appendNode(_0x3373a4), this.outputCount = 1, this.title = "Consistent Noise";
    }
    if (this.type == "pulsenoiseconsistent") {
      this.width = 170, this.height = 54, this.updateNoise(), this.function = function (_0x5cdd0b, _0x1f5918) {
        return this.noiseTable[Math.floor((_0x5cdd0b * 256 / (Math.PI * 2) % 256 + 256) % 256)] > 0.5 ? _0x1f5918.final_amplitude : -_0x1f5918.final_amplitude;
      };
      var _0x344d32 = new ElementSlider(this, 0, 4, 110, 0.01, 0, 1, 1);
      _0x344d32.onchange = function (_0x49d7c6) {
        _0x49d7c6.target.parent.amplitude = _0x49d7c6.value;
      }, this.appendNode(_0x344d32);
      var _0x3373a4 = new ElementKnob(this, 0, this.height - 32, -1, 1);
      _0x3373a4.onchange = function (_0x2bb2f9) {
        _0x2bb2f9.target.parent.mod_amplitude = _0x2bb2f9.value;
      }, this.appendNode(_0x3373a4), this.outputCount = 1, this.title = "Consistent Pulse Noise";
    }
    if (this.type == "pulse") {
      this.width = 170, this.height = 93, this.function = function (_0x2331e3, _0x4a0106) {
        var _0x45bcc1 = -1;
        ((_0x2331e3 * _0x4a0106.final_multiplier / (Math.PI * 2) + _0x4a0106.final_phase) % 1 + 1) % 1 >= _0x4a0106.final_pulseWidth && (_0x45bcc1 = 1);
        ;
        return _0x45bcc1 * _0x4a0106.final_amplitude;
      };
      var _0x9af687 = new ElementSlider(this, 0, 4, 110, 1, 0, 15, 1), _0x15e0d3 = new ElementSlider(this, 0, 17, 110, 0.01, 0, 1, 0), _0x344d32 = new ElementSlider(this, 0, 30, 110, 0.01, 0, 1, 1), _0x1c3719 = new ElementSlider(this, 0, 43, 110, 0.01, 0, 1, 0.5);
      _0x9af687.onchange = function (_0x421f0d) {
        _0x421f0d.target.parent.multiplier = _0x421f0d.value;
      }, _0x15e0d3.onchange = function (_0x2c7023) {
        _0x2c7023.target.parent.phase = _0x2c7023.value;
      }, _0x344d32.onchange = function (_0x4298e0) {
        _0x4298e0.target.parent.amplitude = _0x4298e0.value;
      }, _0x1c3719.onchange = function (_0x4f5c78) {
        _0x4f5c78.target.parent.pulseWidth = _0x4f5c78.value;
      }, this.appendNode(_0x9af687), this.appendNode(_0x15e0d3), this.appendNode(_0x344d32), this.appendNode(_0x1c3719);
      var _0x44a157 = new ElementKnob(this, 0, this.height - 32, -12, 12), _0xe58e27 = new ElementKnob(this, 17, this.height - 32, -1, 1), _0x3373a4 = new ElementKnob(this, 34, this.height - 32, -1, 1), _0x1efcaf = new ElementKnob(this, 51, this.height - 32, -1, 1);
      _0x44a157.onchange = function (_0x5d470d) {
        _0x5d470d.target.parent.mod_multiplier = _0x5d470d.value;
      }, _0xe58e27.onchange = function (_0x37010f) {
        _0x37010f.target.parent.mod_phase = _0x37010f.value;
      }, _0x3373a4.onchange = function (_0x4440c0) {
        _0x4440c0.target.parent.mod_amplitude = _0x4440c0.value;
      }, _0x1efcaf.onchange = function (_0x2c8838) {
        _0x2c8838.target.parent.mod_pulseWidth = _0x2c8838.value;
      }, this.appendNode(_0x44a157), this.appendNode(_0xe58e27), this.appendNode(_0x3373a4), this.appendNode(_0x1efcaf), this.outputCount = 1, this.title = "Pulse Oscillator";
    }
    this.type == "mixer" && (this.width = 70, this.height = 50, this.function = function (_0x44f228, _0x4c55a6) {
      var _0x483baa = 0;
      return _0x4c55a6.inputs[0] && (_0x483baa += _0x4c55a6.inputs[0].function(_0x44f228, _0x4c55a6.inputs[0])), _0x4c55a6.inputs[1] && (_0x483baa += _0x4c55a6.inputs[1].function(_0x44f228, _0x4c55a6.inputs[1])), _0x4c55a6.inputs[2] && (_0x483baa += _0x4c55a6.inputs[2].function(_0x44f228, _0x4c55a6.inputs[2])), _0x4c55a6.inputs[3] && (_0x483baa += _0x4c55a6.inputs[3].function(_0x44f228, _0x4c55a6.inputs[3])), _0x483baa * _0x4c55a6.final_amplitude;
    }, this.inputCount = 4, this.outputCount = 1, this.title = "Mixer");
    this.type == "inverter" && (this.width = 70, this.height = 50, this.function = function (_0x233c84, _0x3958e6) {
      var _0x43fc63 = 0;
      return _0x3958e6.inputs[0] && (_0x43fc63 += -_0x3958e6.inputs[0].function(_0x233c84, _0x3958e6.inputs[0])), _0x43fc63 * _0x3958e6.final_amplitude;
    }, this.inputCount = 1, this.outputCount = 1, this.title = "Inverter");
    if (this.type == "phasemodulation") {
      this.width = 140, this.height = 75;
      var _0x208cb3 = new ElementSlider(this, 3, 4, 130, 0.1, 0, 16, 1);
      this.appendNode(_0x208cb3), _0x208cb3.onchange = function (_0x5c94b1) {
        _0x5c94b1.target.parent.modulation = _0x5c94b1.value;
      };
      var _0x3767aa = new ElementKnob(this, 0, this.height - 32, -16, 16);
      _0x3767aa.onchange = function (_0x517e3f) {
        _0x517e3f.target.parent.mod_modulation = _0x517e3f.value;
      }, this.appendNode(_0x3767aa), this.function = function (_0x10cdba, _0xd2d63) {
        var _0x5257d0 = 0, _0x5e1e62 = 0;
        return _0xd2d63.inputs[1] && (_0x5257d0 = _0xd2d63.inputs[1].function(_0x10cdba, _0xd2d63.inputs[1])), _0xd2d63.inputs[0] && (_0x5e1e62 = _0xd2d63.inputs[0].function(_0x10cdba + _0x5257d0 * _0xd2d63.final_modulation, _0xd2d63.inputs[0])), _0x5e1e62 * _0xd2d63.final_amplitude;
      }, this.inputCount = 2, this.outputCount = 1, this.title = "Phase Modulation";
    }
    if (this.type == "ringmodulation") {
      this.width = 140, this.height = 75;
      var _0x208cb3 = new ElementSlider(this, 3, 4, 130, 0.01, 0, 1, 1);
      this.appendNode(_0x208cb3), _0x208cb3.onchange = function (_0x163a9f) {
        _0x163a9f.target.parent.modulation = _0x163a9f.value;
      };
      var _0x3767aa = new ElementKnob(this, 0, this.height - 32, -1, 1);
      _0x3767aa.onchange = function (_0x4f8a65) {
        _0x4f8a65.target.parent.mod_modulation = _0x4f8a65.value;
      }, this.appendNode(_0x3767aa), this.function = function (_0x488108, _0x45a16a) {
        var _0x4d0d87 = 1, _0x574e35 = 1;
        return _0x45a16a.inputs[0] && (_0x4d0d87 = _0x45a16a.inputs[0].function(_0x488108, _0x45a16a.inputs[0])), _0x45a16a.inputs[1] && (_0x574e35 = _0x45a16a.inputs[1].function(_0x488108, _0x45a16a.inputs[1]) * _0x45a16a.final_modulation + (1 - _0x45a16a.final_modulation)), !_0x45a16a.inputs[0] && !_0x45a16a.inputs[1] && (_0x4d0d87 = 0), _0x4d0d87 * _0x574e35 * _0x45a16a.final_amplitude;
      }, this.inputCount = 2, this.outputCount = 1, this.title = "Ring Modulation";
    }
    this.type == "splitter" && (this.width = 70, this.height = 50, this.function = function (_0x272889, _0x22b0aa) {
      return _0x22b0aa.inputs[0] ? _0x22b0aa.inputs[0].function(_0x272889, _0x22b0aa.inputs[0]) * _0x22b0aa.final_amplitude : 0;
    }, this.inputCount = 1, this.outputCount = 4, this.title = "Splitter");
    if (this.type == "gainer") {
      this.width = 140, this.height = 75;
      var _0x5d1e69 = new ElementSlider(this, 3, 4, 130, 0.1, 0, 4, 1);
      this.appendNode(_0x5d1e69), _0x5d1e69.onchange = function (_0x47fd09) {
        _0x47fd09.target.parent.amplitude = _0x47fd09.value;
      };
      var _0x342368 = new ElementKnob(this, 0, this.height - 32, -4, 4);
      _0x342368.onchange = function (_0x3003fe) {
        _0x3003fe.target.parent.mod_amplitude = _0x3003fe.value;
      }, this.appendNode(_0x342368), this.function = function (_0x3c868c, _0x5ec539) {
        var _0x73ff65 = 0;
        return _0x5ec539.inputs[0] && (_0x73ff65 = _0x5ec539.inputs[0].function(_0x3c868c, _0x5ec539.inputs[0])), _0x73ff65 * _0x5ec539.final_amplitude;
      }, this.inputCount = 1, this.outputCount = 1, this.title = "Gainer";
    }
    if (this.type == "syncer") {
      this.width = 140, this.height = 75;
      var _0x208cb3 = new ElementSlider(this, 3, 4, 130, 0.1, 0, 16, 1);
      this.appendNode(_0x208cb3), _0x208cb3.onchange = function (_0x3fcb12) {
        _0x3fcb12.target.parent.modulation = _0x3fcb12.value;
      };
      var _0x3767aa = new ElementKnob(this, 0, this.height - 32, -16, 16);
      _0x3767aa.onchange = function (_0x2071db) {
        _0x2071db.target.parent.mod_modulation = _0x2071db.value;
      }, this.appendNode(_0x3767aa), this.function = function (_0x41ea47, _0x4d6798) {
        var _0x3c4402 = 0;
        return _0x4d6798.inputs[0] && (_0x3c4402 = _0x4d6798.inputs[0].function(_0x41ea47 * _0x4d6798.final_modulation % (Math.PI * 2), _0x4d6798.inputs[0])), _0x3c4402 * _0x4d6798.final_amplitude;
      }, this.inputCount = 1, this.outputCount = 1, this.title = "Sync";
    }
    if (this.type == "feedback") {
      this.width = 140, this.height = 75, this.modulation = 0;
      var _0x208cb3 = new ElementSlider(this, 3, 4, 130, 0.01, 0, 2, 0);
      this.appendNode(_0x208cb3), _0x208cb3.onchange = function (_0x46b99c) {
        _0x46b99c.target.parent.modulation = _0x46b99c.value;
      };
      var _0x3767aa = new ElementKnob(this, 0, this.height - 32, -2, 2);
      _0x3767aa.onchange = function (_0x565c24) {
        _0x565c24.target.parent.mod_modulation = _0x565c24.value;
      }, this.appendNode(_0x3767aa), this.osc_phase = 0, this.osc_prev = 0, this.filterNeedsUpdate = true, this.function = function (_0x5546e0, _0x6ae20e) {
        var _0x128e13 = 0, _0x4dd5ea = 0.000244140625;
        if (_0x6ae20e.filterNeedsUpdate) {
          if (_0x6ae20e.inputs[0]) {
            _0x6ae20e.osc_phase = 0, _0x6ae20e.osc_prev = 0;
            for (var _0x5c6315 = 0; _0x5c6315 < Math.PI * 2; _0x5c6315 += _0x4dd5ea) {
              _0x6ae20e.osc_phase += _0x4dd5ea + (_0x6ae20e.inputs[0].function(_0x6ae20e.osc_phase, _0x6ae20e.inputs[0]) - _0x6ae20e.osc_prev) * _0x6ae20e.final_modulation, _0x6ae20e.osc_prev = _0x128e13, _0x128e13 = _0x6ae20e.inputs[0].function(_0x6ae20e.osc_phase, _0x6ae20e.inputs[0]), _0x6ae20e.feedbackHistory[Math.floor(_0x5c6315 / _0x4dd5ea)] = _0x128e13;
            }
          } else for (var _0x5c6315 = 0; _0x5c6315 < Math.PI * 2; _0x5c6315 += _0x4dd5ea) {
            _0x6ae20e.feedbackHistory[Math.floor(_0x5c6315 / _0x4dd5ea)] = 0;
          }
          _0x6ae20e.filterNeedsUpdate = false;
        }
        return _0x6ae20e.feedbackHistory[Math.floor((_0x5546e0 % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) / _0x4dd5ea)] * _0x6ae20e.final_amplitude;
      }, this.inputCount = 1, this.outputCount = 1, this.title = "PM Feedback";
    }
    if (this.type == "quantizer") {
      this.width = 140, this.height = 75, this.distortion = 1;
      var _0x3ffeab = new ElementSlider(this, 3, 4, 130, 0.01, 0, 1, 1);
      this.appendNode(_0x3ffeab), _0x3ffeab.onchange = function (_0x292d42) {
        _0x292d42.target.parent.distortion = _0x292d42.value;
      };
      var _0x59ba99 = new ElementKnob(this, 0, this.height - 32, -1, 1);
      _0x59ba99.onchange = function (_0x5383bc) {
        _0x5383bc.target.parent.mod_distortion = _0x5383bc.value;
      }, this.appendNode(_0x59ba99), this.function = function (_0xf633aa, _0x38118a) {
        var _0x3d0344 = 0;
        if (_0x38118a.inputs[0]) {
          if (this.final_distortion < 1) for (var _0x2f73b4 = 0; _0x2f73b4 < _0xf633aa; _0x2f73b4 += (1 - this.final_distortion) * Math.PI * 2) {
            _0x3d0344 = _0x38118a.inputs[0].function(_0x2f73b4, _0x38118a.inputs[0]);
          } else _0x3d0344 = _0x38118a.inputs[0].function(_0xf633aa, _0x38118a.inputs[0]);
        }
        return _0x3d0344 * _0x38118a.final_amplitude;
      }, this.inputCount = 1, this.outputCount = 1, this.title = "Quantization";
    }
    if (this.type == "bitcrusher") {
      this.width = 140, this.height = 75, this.distortion = 1;
      var _0x3ffeab = new ElementSlider(this, 3, 4, 130, 0.01, 0, 1, 1);
      this.appendNode(_0x3ffeab), _0x3ffeab.onchange = function (_0x1ae44d) {
        _0x1ae44d.target.parent.distortion = _0x1ae44d.value;
      };
      var _0x59ba99 = new ElementKnob(this, 0, this.height - 32, -1, 1);
      _0x59ba99.onchange = function (_0x405868) {
        _0x405868.target.parent.mod_distortion = _0x405868.value;
      }, this.appendNode(_0x59ba99), this.function = function (_0x3a6277, _0x13d66c) {
        var _0x2dbc5f = 0;
        if (_0x13d66c.inputs[0]) {
          if (this.final_distortion < 1) {
            var _0x3ff403 = _0x13d66c.inputs[0].function(_0x3a6277, _0x13d66c.inputs[0]);
            if (_0x3ff403 >= 0) for (var _0x454639 = 0; _0x454639 < _0x3ff403; _0x454639 += 1 - this.final_distortion) {
              _0x2dbc5f = _0x454639;
            } else for (var _0x454639 = 0; _0x454639 > _0x3ff403; _0x454639 -= 1 - this.final_distortion) {
              _0x2dbc5f = _0x454639;
            }
          } else _0x2dbc5f = _0x13d66c.inputs[0].function(_0x3a6277, _0x13d66c.inputs[0]);
        }
        return _0x2dbc5f * _0x13d66c.final_amplitude;
      }, this.inputCount = 1, this.outputCount = 1, this.title = "Bitcrusher";
    }
    if (this.type == "lowpass") {
      this.width = 167, this.height = 88, this.resonance = 0.75;
      var _0x287498 = new ElementSlider(this, 3, 4, 130, 0.01, 0, 1, 1), _0x239d4b = new ElementSlider(this, 3, 17, 130, 0.01, 0, 1, 0.75);
      _0x287498.onchange = function (_0xdd1ac1) {
        _0xdd1ac1.target.parent.cutoff = _0xdd1ac1.value, _0xdd1ac1.target.parent.filterNeedsUpdate = true;
      }, _0x239d4b.onchange = function (_0x238b81) {
        _0x238b81.target.parent.resonance = _0x238b81.value, _0x238b81.target.parent.filterNeedsUpdate = true;
      }, this.appendNode(_0x287498), this.appendNode(_0x239d4b);
      var _0x2917fd = new ElementKnob(this, 0, this.height - 32, -1, 1), _0x5b4d2d = new ElementKnob(this, 17, this.height - 32, -1, 1);
      _0x2917fd.onchange = function (_0x531107) {
        _0x531107.target.parent.mod_cutoff = _0x531107.value;
      }, _0x5b4d2d.onchange = function (_0x29d146) {
        _0x29d146.target.parent.mod_resonance = _0x29d146.value;
      }, this.appendNode(_0x2917fd), this.appendNode(_0x5b4d2d), this.function = function (_0x35383a, _0x38ca90) {
        var _0x14871e = 0;
        if (_0x38ca90.inputs[0]) {
          if (_0x38ca90.filterInputHistory.length == 0) {
            for (var _0x59021e = 0; _0x59021e <= (4 * (Math.PI * 2) + Math.PI * 2) * 100; _0x59021e++) {
              _0x38ca90.filterInputHistory[_0x59021e] = _0x38ca90.inputs[0].function(_0x59021e / 100, _0x38ca90.inputs[0]);
            }
            _0x38ca90.filterNeedsUpdate = true;
          } else for (var _0x59021e = 0; _0x59021e <= (4 * (Math.PI * 2) + Math.PI * 2) * 100; _0x59021e += 25) {
            if (_0x38ca90.filterInputHistory[_0x59021e] != _0x38ca90.inputs[0].function(_0x59021e / 100, _0x38ca90.inputs[0])) {
              _0x38ca90.filterNeedsUpdate = true;
              break;
            }
          }
          if (_0x38ca90.filterNeedsUpdate) {
            for (var _0x59021e = 0; _0x59021e <= (4 * (Math.PI * 2) + Math.PI * 2) * 100; _0x59021e++) {
              _0x38ca90.filterInputHistory[_0x59021e] = _0x38ca90.inputs[0].function(_0x59021e / 100, _0x38ca90.inputs[0]);
            }
            _0x38ca90.filterOutputHistory = [];
            var _0x58c28a = 0, _0x18fb6c = 0, _0x32ce2f = 0, _0x246844 = 4 ** (_0x38ca90.final_cutoff * 6 - 6);
            for (var _0x59021e = 0; _0x59021e <= 4 * (Math.PI * 2) * 100; _0x59021e++) {
              _0x32ce2f = _0x38ca90.filterInputHistory[_0x59021e] - _0x58c28a, _0x18fb6c += (_0x32ce2f - _0x18fb6c) * (1 - _0x38ca90.final_resonance), _0x58c28a += _0x18fb6c * _0x246844;
            }
            for (var _0x59021e = 0; _0x59021e <= Math.PI * 2 * 100; _0x59021e++) {
              _0x32ce2f = _0x38ca90.filterInputHistory[_0x59021e] - _0x58c28a, _0x18fb6c += (_0x32ce2f - _0x18fb6c) * (1 - _0x38ca90.final_resonance), _0x58c28a += _0x18fb6c * _0x246844, _0x38ca90.filterOutputHistory[_0x59021e] = _0x58c28a;
            }
            _0x38ca90.filterNeedsUpdate = false;
          }
          _0x14871e = _0x38ca90.filterOutputHistory[Math.floor(_0x35383a * 100)];
        }
        return _0x14871e * _0x38ca90.final_amplitude;
      }, this.inputCount = 1, this.outputCount = 1, this.title = "Lowpass Filter";
    }
    if (this.type == "highpass") {
      this.width = 167, this.height = 88, this.resonance = 0.75;
      var _0x287498 = new ElementSlider(this, 3, 4, 130, 0.01, 0, 1, 1), _0x239d4b = new ElementSlider(this, 3, 17, 130, 0.01, 0, 1, 0.75);
      _0x287498.onchange = function (_0x2f1c0e) {
        _0x2f1c0e.target.parent.cutoff = _0x2f1c0e.value, _0x2f1c0e.target.parent.filterNeedsUpdate = true;
      }, _0x239d4b.onchange = function (_0x3c7be3) {
        _0x3c7be3.target.parent.resonance = _0x3c7be3.value, _0x3c7be3.target.parent.filterNeedsUpdate = true;
      }, this.appendNode(_0x287498), this.appendNode(_0x239d4b);
      var _0x2917fd = new ElementKnob(this, 0, this.height - 32, -1, 1), _0x5b4d2d = new ElementKnob(this, 17, this.height - 32, -1, 1);
      _0x2917fd.onchange = function (_0x109359) {
        _0x109359.target.parent.mod_cutoff = _0x109359.value;
      }, _0x5b4d2d.onchange = function (_0x3a3b2f) {
        _0x3a3b2f.target.parent.mod_resonance = _0x3a3b2f.value;
      }, this.appendNode(_0x2917fd), this.appendNode(_0x5b4d2d), this.function = function (_0x4a611d, _0x328d5d) {
        var _0x107e4d = 0;
        if (_0x328d5d.inputs[0]) {
          if (_0x328d5d.filterInputHistory.length == 0) {
            for (var _0x194c28 = 0; _0x194c28 <= (4 * (Math.PI * 2) + Math.PI * 2) * 100; _0x194c28++) {
              _0x328d5d.filterInputHistory[_0x194c28] = _0x328d5d.inputs[0].function(_0x194c28 / 100, _0x328d5d.inputs[0]);
            }
            _0x328d5d.filterNeedsUpdate = true;
          } else for (var _0x194c28 = 0; _0x194c28 <= (4 * (Math.PI * 2) + Math.PI * 2) * 100; _0x194c28 += 25) {
            if (_0x328d5d.filterInputHistory[_0x194c28] != _0x328d5d.inputs[0].function(_0x194c28 / 100, _0x328d5d.inputs[0])) {
              _0x328d5d.filterNeedsUpdate = true;
              break;
            }
          }
          if (_0x328d5d.filterNeedsUpdate) {
            for (var _0x194c28 = 0; _0x194c28 <= (4 * (Math.PI * 2) + Math.PI * 2) * 100; _0x194c28++) {
              _0x328d5d.filterInputHistory[_0x194c28] = _0x328d5d.inputs[0].function(_0x194c28 / 100, _0x328d5d.inputs[0]);
            }
            _0x328d5d.filterOutputHistory = [];
            var _0x46b881 = 0, _0x5a3aba = 0, _0x3a9228 = 0, _0x30053e = 4 ** (_0x328d5d.final_cutoff * 6 - 6);
            for (var _0x194c28 = 0; _0x194c28 <= 4 * (Math.PI * 2) * 100; _0x194c28++) {
              _0x3a9228 = _0x328d5d.filterInputHistory[_0x194c28] - _0x46b881, _0x5a3aba += (_0x3a9228 - _0x5a3aba) * (1 - _0x328d5d.final_resonance), _0x46b881 += _0x5a3aba * _0x30053e;
            }
            for (var _0x194c28 = 0; _0x194c28 <= Math.PI * 2 * 100; _0x194c28++) {
              _0x3a9228 = _0x328d5d.filterInputHistory[_0x194c28] - _0x46b881, _0x5a3aba += (_0x3a9228 - _0x5a3aba) * (1 - _0x328d5d.final_resonance), _0x46b881 += _0x5a3aba * _0x30053e, _0x328d5d.filterOutputHistory[_0x194c28] = _0x46b881;
            }
            _0x328d5d.filterNeedsUpdate = false;
          }
          _0x107e4d = _0x328d5d.inputs[0].function(_0x4a611d, _0x328d5d.inputs[0]) - _0x328d5d.filterOutputHistory[Math.floor(_0x4a611d * 100)];
        }
        return _0x107e4d * _0x328d5d.final_amplitude;
      }, this.inputCount = 1, this.outputCount = 1, this.title = "Highpass Filter";
    }
    windows[windows.length] = this;
  }
  
  ["appendNode"](_0x113412) {
    this.elements[this.elements.length] = _0x113412;
  }
  
  ["draw"]() 
  {
    fill(0), rect(this.x, this.y, this.width, this.height), rect(this.x + 1, this.y + 1, this.width, this.height), fill(255), rect(this.x + 1, this.y + 1, this.width - 2, this.height - 2);
    for (var _0x350bbb = 0; _0x350bbb < this.elements.length; _0x350bbb++) {
      this.elements[_0x350bbb].draw();
    }
    fill(0), rect(this.x, this.y, this.width, 13), drawCaptionText(this.title, this.x + 2, this.y + 1);
    var _0x1b93e5;
    for (var _0x350bbb = windows.length - 1; _0x350bbb >= 0; _0x350bbb--) {
      if (mouseX >= windows[_0x350bbb].x && mouseX <= windows[_0x350bbb].x + windows[_0x350bbb].width && mouseY >= windows[_0x350bbb].y && mouseY <= windows[_0x350bbb].y + windows[_0x350bbb].height) {
        _0x1b93e5 = windows[_0x350bbb];
        break;
      }
    }
    this.closeButton && (mouseX >= this.x + this.width - 13 && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + 13 && !mouseDragWindow && _0x1b93e5 == this ? (!mousePressing ? image(GFX.x_, this.x + this.width - 12, this.y + 1) : image(GFX.x, this.x + this.width - 12, this.y + 1), cursor("pointer")) : mouseCloseWindow == this ? image(GFX.x_, this.x + this.width - 12, this.y + 1) : image(GFX.x, this.x + this.width - 12, this.y + 1));
    if (this.type == "sine" || this.type == "sawtooth" || this.type == "triangle" || this.type == "pulse" || this.type == "noise" || this.type == "pulsenoise" || this.type == "noiseconsistent" || this.type == "pulsenoiseconsistent" || this.type == "osc") {
      rect(this.x + this.width - 3 - 65, this.y + this.height - 3, 66, 1), rect(this.x + this.width - 3 - 65, this.y + this.height - 20, 66, 1), rect(this.x + this.width - 3 - 65, this.y + this.height - 20, 1, 17), rect(this.x + this.width - 3, this.y + this.height - 20, 1, 17);
      for (var _0x350bbb = 0; _0x350bbb < 64; _0x350bbb += 0.25) {
        var _0x3f68c3 = Math.min(Math.max(Math.floor(this.function(_0x350bbb * Math.PI * 2 / 64, this) * 15 / 2 + 8), 0), 15), _0x5e3e0a = Math.min(Math.max(Math.floor(this.function((_0x350bbb + 0.25) % 64 * Math.PI * 2 / 64, this) * 15 / 2 + 8), 0), 15);
        rect(this.x + this.width - 3 - 64 + Math.floor(_0x350bbb), this.y + this.height - 16 - 3 + 15 - _0x3f68c3, 1, 1), _0x5e3e0a - _0x3f68c3 > 1 && rect(this.x + this.width - 3 - 64 + Math.floor(_0x350bbb), this.y + this.height - 16 - 3 + 15 - _0x3f68c3, 1, _0x3f68c3 - _0x5e3e0a + 1), _0x5e3e0a - _0x3f68c3 < 0 && rect(this.x + this.width - 3 - 64 + Math.floor(_0x350bbb), this.y + this.height - 16 - 3 + 15 - _0x3f68c3, 1, _0x3f68c3 - _0x5e3e0a);
      }
      this.type == "noise" || this.type == "pulsenoise" || this.type == "noiseconsistent" || this.type == "pulsenoiseconsistent" ? (image(GFX.amp, this.x + 119, this.y + 18), this.amplitude == 1 ? drawNumber("1.0", this.x + 140, this.y + 18) : drawNumber(this.amplitude.toFixed(2).split(".")[1], this.x + 140, this.y + 18)) : (image(GFX.mul, this.x + 119, this.y + 18), drawNumber(this.multiplier.toString().padStart(2, "0"), this.x + 140, this.y + 18), image(GFX.phs, this.x + 119, this.y + 31), this.phase == 1 ? drawNumber("1.0", this.x + 140, this.y + 31) : drawNumber("." + this.phase.toFixed(2).split(".")[1], this.x + 140, this.y + 31), image(GFX.amp, this.x + 119, this.y + 44), drawNumber(this.amplitude.toFixed(2), this.x + 140, this.y + 44));
    }
    this.type == "pulse" && (this.pulseWidth == 1 ? drawNumber("100", this.x + 139, this.y + 57) : drawNumber(Math.floor(this.pulseWidth * 100), this.x + 139, this.y + 57));
	
	if(this.type == "pulse")
	{
		drawText("PW", this.x + 120, this.y + 54);
	}
	
    this.type == "phasemodulation" && (fill(0), rect(this.x + 1, this.y + 31, 34, 1), rect(this.x + 35, this.y + 31, 1, 24), rect(this.x + 35, this.y + 55, 34, 1), rect(this.x + 1, this.y + 43, 31, 1), rect(this.x + 34, this.y + 42, 3, 3), rect(this.x + 29, this.y + 41, 1, 5), rect(this.x + 30, this.y + 42, 1, 3), rect(this.x + 66, this.y + 53, 1, 5), rect(this.x + 67, this.y + 54, 1, 3), this.modulation < 10 ? drawNumber(this.modulation.toFixed(1), this.x + 120, this.y + 30) : drawNumber(this.modulation.toFixed(1), this.x + 120 - 8, this.y + 30));
    this.type == "ringmodulation" && (fill(0), rect(this.x + 1, this.y + 31, 34, 1), rect(this.x + 35, this.y + 31, 1, 24), rect(this.x + 35, this.y + 55, 34, 1), rect(this.x + 1, this.y + 43, 31, 1), rect(this.x + 34, this.y + 42, 3, 3), rect(this.x + 29, this.y + 41, 1, 5), rect(this.x + 30, this.y + 42, 1, 3), rect(this.x + 66, this.y + 53, 1, 5), rect(this.x + 67, this.y + 54, 1, 3), drawNumber(this.modulation.toFixed(2), this.x + 120 - 8, this.y + 30));
    this.type == "gainer" && (fill(0), rect(this.x + 1, this.y + 37, 34, 1), rect(this.x + 35, this.y + 37, 1, 18), rect(this.x + 35, this.y + 55, 34, 1), rect(this.x + 66, this.y + 53, 1, 5), rect(this.x + 67, this.y + 54, 1, 3), drawNumber(this.amplitude.toFixed(1), this.x + 120, this.y + 30));
    this.type == "syncer" && (fill(0), rect(this.x + 1, this.y + 37, 34, 1), rect(this.x + 35, this.y + 37, 1, 18), rect(this.x + 35, this.y + 55, 34, 1), rect(this.x + 66, this.y + 53, 1, 5), rect(this.x + 67, this.y + 54, 1, 3), this.modulation < 10 ? drawNumber(this.modulation.toFixed(1), this.x + 120, this.y + 30) : drawNumber(this.modulation.toFixed(1), this.x + 120 - 8, this.y + 30));
    this.type == "feedback" && (fill(0), rect(this.x + 1, this.y + 37, 23, 1), rect(this.x + 23, this.y + 37, 1, 18), rect(this.x + 22, this.y + 36, 3, 3), rect(this.x + 23, this.y + 55, 46, 1), rect(this.x + 66, this.y + 53, 1, 5), rect(this.x + 67, this.y + 54, 1, 3), rect(this.x + 46, this.y + 37, 1, 18), rect(this.x + 29, this.y + 35, 1, 5), rect(this.x + 28, this.y + 36, 1, 3), rect(this.x + 27, this.y + 37, 20, 1), drawNumber(this.modulation.toFixed(2), this.x + 120 - 8, this.y + 30));
    (this.type == "quantizer" || this.type == "bitcrusher") && (fill(0), rect(this.x + 1, this.y + 37, 34, 1), rect(this.x + 35, this.y + 37, 1, 18), rect(this.x + 35, this.y + 55, 34, 1), rect(this.x + 66, this.y + 53, 1, 5), rect(this.x + 67, this.y + 54, 1, 3), drawNumber(this.distortion.toFixed(2), this.x + 120 - 8, this.y + 30));
    (this.type == "lowpass" || this.type == "highpass") && (fill(0), rect(this.x + 1, this.y + 44, 47, 1), rect(this.x + 48, this.y + 44, 1, 24), rect(this.x + 48, this.y + 68, 48, 1), rect(this.x + 93, this.y + 66, 1, 5), rect(this.x + 94, this.y + 67, 1, 3), drawNumber(this.cutoff.toFixed(2), this.x + this.width - 5 - 24, this.y + 18), drawNumber(this.resonance.toFixed(2), this.x + this.width - 5 - 24, this.y + 31));
    if (this.type == "mixer" || this.type == "splitter" || this.type == "phasemodulation" || this.type == "ringmodulation" || this.type == "gainer" || this.type == "syncer" || this.type == "feedback" || this.type == "quantizer" || this.type == "bitcrusher" || this.type == "lowpass" || this.type == "highpass" || this.type == "inverter") {
      rect(this.x + this.width - 3 - 65, this.y + this.height - 3, 66, 1), rect(this.x + this.width - 3 - 65, this.y + this.height - 36, 66, 1), rect(this.x + this.width - 3 - 65, this.y + this.height - 36, 1, 33), rect(this.x + this.width - 3, this.y + this.height - 36, 1, 33);
      for (var _0x350bbb = 0; _0x350bbb < 64; _0x350bbb += 0.25) {
        var _0x3f68c3 = Math.min(Math.max(Math.floor(this.function(_0x350bbb * Math.PI * 2 / 64, this) * 15.5 + 16), 0), 31), _0x5e3e0a = Math.min(Math.max(Math.floor(this.function((_0x350bbb + 0.25) % 64 * Math.PI * 2 / 64, this) * 15.5 + 16), 0), 31);
        rect(this.x + this.width - 3 - 64 + Math.floor(_0x350bbb), this.y + this.height - 16 - 3 + 15 - _0x3f68c3, 1, 1), _0x5e3e0a - _0x3f68c3 > 1 && rect(this.x + this.width - 3 - 64 + Math.floor(_0x350bbb), this.y + this.height - 16 - 3 + 15 - _0x3f68c3, 1, _0x3f68c3 - _0x5e3e0a + 1), _0x5e3e0a - _0x3f68c3 < 0 && rect(this.x + this.width - 3 - 64 + Math.floor(_0x350bbb), this.y + this.height - 16 - 3 + 15 - _0x3f68c3, 1, _0x3f68c3 - _0x5e3e0a);
      }
    }
	
    if (this.type == "output") 
	{
      rect(this.x + 2, this.y + 78 + 20 - 6, 2 + (this.waveLength > 256 ? (this.waveLength / 2) : this.waveLength), 1), rect(this.x + 2, this.y + 78 + 20 - 39, 2 + (this.waveLength > 256 ? (this.waveLength / 2) : this.waveLength), 1), rect(this.x + 2, this.y + 78 + 20 - 39, 1, 33), rect(this.x + (this.waveLength > 256 ? (this.waveLength / 2) : this.waveLength) + 3, this.y + 78 + 20 - 39, 1, 33); //frame around the wave
	  
      for (var _0x350bbb = 0; _0x350bbb < this.waveLength; _0x350bbb++) 
	  {
        var _0x3f68c3 = 0, _0x5e3e0a = 0;
		
        for (var _0x515b1f = 0; _0x515b1f < 1; _0x515b1f += 0.25) 
		{
          _0x3f68c3 += this.function((_0x350bbb + _0x515b1f) * Math.PI * 2 / this.waveLength, this) * 0.25, _0x5e3e0a += this.function(((_0x350bbb + 1) % this.waveLength + _0x515b1f) * Math.PI * 2 / this.waveLength, this) * 0.25;
        }
		
		//(this.waveLength > 256 ? (_0x350bbb / 2) : _0x350bbb)
		
        _0x3f68c3 = Math.min(Math.max(Math.floor(_0x3f68c3 * 7.5 + 8), 0), 15) * 2;

		_0x5e3e0a = Math.min(Math.max(Math.floor(_0x5e3e0a * 7.5 + 8), 0), 15) * 2;
		
		rect(this.x + 3 + (this.waveLength > 256 ? (Math.round(_0x350bbb / 2)) : _0x350bbb), this.y + 78 + 4 - 6 + 15 - _0x3f68c3, 1, 1);

		_0x5e3e0a - _0x3f68c3 > 1 && rect(this.x + 3 + (this.waveLength > 256 ? (Math.round(_0x350bbb / 2)) : _0x350bbb), this.y + 78 + 20 - 16 - 6 + 15 - _0x3f68c3, 1, _0x3f68c3 - _0x5e3e0a);
		
		_0x5e3e0a - _0x3f68c3 < 0 && rect(this.x + 3 + (this.waveLength > 256 ? (Math.round(_0x350bbb / 2)) : _0x350bbb), this.y + 78 + 20 - 16 - 6 + 15 - _0x3f68c3, 1, _0x3f68c3 - _0x5e3e0a + 1);
      }
	  
      drawNumber(this.waveLength, this.x + 269, this.y + 30 + 13);
      //drawNumber((this.macroSlider.value * 100), this.x + 270, this.y);
      drawNumber(resolution, this.x + 269, this.y + 30)
    }
  }
  ["remove"]() {
    for (var _0x2c7581 = 0; _0x2c7581 < this.outputCount; _0x2c7581++) {
      var _0x587544 = 1;
      while (_0x587544 > 0) {
        _0x587544 = 0;
        var _0x293934 = -1;
        if (this.outputs[_0x2c7581]) {
          for (var _0x49bb00 = 0; _0x49bb00 < this.outputs[_0x2c7581].inputs.length; _0x49bb00++) {
            this.outputs[_0x2c7581].inputs[_0x49bb00] == this && (_0x293934 = _0x49bb00, _0x587544++);
          }
          _0x293934 != -1 && (this.outputs[_0x2c7581].inputs[_0x293934] = null);
        }
      }
    }
    for (var _0x2c7581 = 0; _0x2c7581 < this.inputCount; _0x2c7581++) {
      var _0x587544 = 1;
      while (_0x587544 > 0) {
        _0x587544 = 0;
        var _0x293934 = 0;
        if (this.inputs[_0x2c7581]) {
          for (var _0x49bb00 = 0; _0x49bb00 < this.inputs[_0x2c7581].outputs.length; _0x49bb00++) {
            this.inputs[_0x2c7581].outputs[_0x49bb00] == this && (_0x293934 = _0x49bb00, _0x587544++);
          }
          this.inputs[_0x2c7581].outputs[_0x293934] = null;
        }
      }
    }
    var _0x2e93cb = 0;
    for (var _0x2c7581 = 0; _0x2c7581 < windows.length; _0x2c7581++) {
      windows[_0x2c7581] == this && (_0x2e93cb = _0x2c7581);
    }
    windows.splice(_0x2e93cb, 1), updateFinalValues();
  }
  ["onClose"]() {
    var _0x3dde2a;
    for (var _0x1fc3f3 = windows.length - 1; _0x1fc3f3 >= 0; _0x1fc3f3--) {
      if (mouseX >= windows[_0x1fc3f3].x && mouseX <= windows[_0x1fc3f3].x + windows[_0x1fc3f3].width && mouseY >= windows[_0x1fc3f3].y && mouseY <= windows[_0x1fc3f3].y + windows[_0x1fc3f3].height) {
        _0x3dde2a = windows[_0x1fc3f3];
        break;
      }
    }
    return mouseX >= this.x + this.width - 13 && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + 13 && !mouseDragWindow && _0x3dde2a == this;
  }
  ["updateFinalValues"]() {
    this.final_multiplier = Math.min(Math.max(Math.floor(this.multiplier + this.mod_multiplier * modulation + 0.5), 0), 15), this.final_phase = this.phase + this.mod_phase * modulation, this.final_amplitude = Math.max(this.amplitude + this.mod_amplitude * modulation, 0);
    if (this.type == "ringmodulation") this.final_modulation = Math.min(Math.max(this.modulation + this.mod_modulation * modulation, 0), 1); else this.type == "syncer" ? this.final_modulation = Math.min(Math.max(this.modulation + this.mod_modulation * modulation, 0), 16) : this.final_modulation = Math.max(this.modulation + this.mod_modulation * modulation, 0);
    this.final_pulseWidth = ((this.pulseWidth + this.mod_pulseWidth * modulation) % 1 + 1) % 1, this.final_distortion = Math.min(Math.max(this.distortion + this.mod_distortion * modulation, 0), 1), this.final_cutoff = Math.min(Math.max(this.cutoff + this.mod_cutoff * modulation, 0), 1), this.final_resonance = Math.min(Math.max(this.resonance + this.mod_resonance * modulation, 0), 1);
  }
  ["createWavetables"]() {
    var output = "";
    for (var macro = 0; macro < 64; macro++) {
      modulation = macro / 64, updateFinalValues();
      for (var _0x378bcf = 0; _0x378bcf < windows.length; _0x378bcf++) {
        (windows[_0x378bcf].type == "noise" || windows[_0x378bcf].type == "pulsenoise") && windows[_0x378bcf].updateNoise();
      }
      for (var _0x3e542e = 0; _0x3e542e < this.waveLength; _0x3e542e++) {
        var _0x214ea3 = 0;
        if (this.inputs[0]) for (var _0x378bcf = 0; _0x378bcf < 1; _0x378bcf += 0.25) {
          _0x214ea3 += this.inputs[0].function((_0x3e542e + _0x378bcf) * Math.PI * 2 / this.waveLength, this.inputs[0]) * 0.25;
        }
        // This is sus, can I increase the resolution this way???????????
        //_0x214ea3 = Math.min(Math.max(Math.floor(_0x214ea3 * 7.5 + 8), 0), 15), output += _0x214ea3 + " ";
        _0x214ea3 = Math.min(Math.max(Math.floor(_0x214ea3 * (resolution/2) + ((resolution/2) + 0.5)), 0), 255), output += _0x214ea3 + " ";
      }
      output += ";\n";
    }
    setClipboard(output), modulation = this.elements[0].value, updateFinalValues();
  }
  ["updateNoise"]() {
    this.seed = Math.random() * 1024, randomSeed(this.seed);
    for (var _0x32bc47 = 0; _0x32bc47 < 32; _0x32bc47++) {
      random();
    }
    for (var _0x32bc47 = 0; _0x32bc47 < 256; _0x32bc47++) {
      this.noiseTable[_0x32bc47] = random();
    }
  }
  ["createDMW"]() {
    var _0x53533c = [];
    _0x53533c.push(this.waveLength), _0x53533c.push(0), _0x53533c.push(0), _0x53533c.push(0), _0x53533c.push(255), _0x53533c.push(1), _0x53533c.push(255);
    for (var _0x16d9ba = 0; _0x16d9ba < this.waveLength; _0x16d9ba++) {
      var _0x56263e = 0;
      if (this.inputs[0]) for (var _0xe7ea2 = 0; _0xe7ea2 < 1; _0xe7ea2 += 0.25) {
        _0x56263e += this.inputs[0].function((_0x16d9ba + _0xe7ea2) * Math.PI * 2 / this.waveLength, this.inputs[0]) * 0.25;
      }
      _0x53533c.push(Math.floor((_0x56263e * 0.5 + 0.5) * 255)), _0x53533c.push(0), _0x53533c.push(0), _0x53533c.push(0);
    }
    var _0xfa940c = new Blob([new Uint8Array(_0x53533c)], {type: "application/octet-stream"});
    saveAs(URL.createObjectURL(_0xfa940c), "patch.dmw"), URL.revokeObjectURL(_0xfa940c);
  }

  ["createWAV"]() {
    var out = [];
    // out.push(this.waveLength), out.push(0), out.push(0), out.push(0), _0x53533c.push(255), _0x53533c.push(1), _0x53533c.push(255);
    for (var _0x16d9ba = 0; _0x16d9ba < this.waveLength; _0x16d9ba++) {
      var _0x56263e = 0;
      if (this.inputs[0]) for (var _0xe7ea2 = 0; _0xe7ea2 < 1; _0xe7ea2 += 0.25) {
        _0x56263e += this.inputs[0].function((_0x16d9ba + _0xe7ea2) * Math.PI * 2 / this.waveLength, this.inputs[0]) * 0.25;
      }
      out.push(Math.floor((_0x56263e * 0.5) * 65535));
      //console.log(Math.floor((_0x56263e * 0.5 + 0.5) * 65535));
    }
    //var dataview = encodeWAV(out, 44100);
    var audioBlob = new Blob([new Int16Array(out)], {type: "application/octet-stream"});
    saveAs(URL.createObjectURL(audioBlob), "out.wav"), URL.revokeObjectURL(audioBlob);
    //this.postMessage(audioBlob);
  }
}

var wireEnd = [[-1, -1, 1, 1, 1, 1, 1, -1, -1], [-1, 1, 0, 0, 0, 0, 0, 1, -1], [1, 0, 0, 1, 1, 1, 0, 0, 1], [1, 0, 1, 1, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 1, 1, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 1], [-1, 1, 0, 0, 0, 0, 0, 1, -1], [-1, -1, 1, 1, 1, 1, 1, -1, -1]], needsUpdate = false, modulation = 1, m1, m2, o1, o2, o3;

function preload()
{
	
}

function setup() 
{
  createCanvas(innerWidth, innerHeight), noStroke(), GFX.x = loadImage("x.png"), GFX.x_ = loadImage("x_.png"), GFX.slider_thumb = loadImage("slider_thumb.png"), GFX.slider_thumb_ = loadImage("slider_thumb_.png"), GFX.button_copy = loadImage("button_copy.png"), GFX.button_copy_ = loadImage("button_copy_.png"), GFX.button_dmw = loadImage("button_dmw.png"), GFX.button_dmw_ = loadImage("button_dmw_.png"), GFX.button_wav = loadImage("button_wav.png"), GFX.button_wav_ = loadImage("button_wav_.png"), GFX.wheel = loadImage("wheel.png"), GFX.numbers = loadImage("numbers.png"), GFX.mul = loadImage("mul.png"), GFX.phs = loadImage("phs.png"), GFX.amp = loadImage("amp.png"), GFX.text_lowercase = loadImage("text_lowercase.png"), GFX.text_uppercase = loadImage("text_uppercase.png"), GFX.text_lowercase_black = loadImage("text_lowercase_black.png"), GFX.text_uppercase_black = loadImage("text_uppercase_black.png"), GFX.text_symbols_black = loadImage("text_symbols_black.png"), GFX.text_numbers_black = loadImage("text_numbers_black.png");
  
  pixelDensity(1);
  
  var _0x347002 = new ElementWindow(20, 20, "osc"), _0x9496ae = new ElementWindow(512, 20, "output");
  
  new ElementWindow(innerWidth - 160 - 20 - 40, innerHeight - 332 - 47, "help"), _0x347002.outputs = [_0x9496ae], _0x347002.inputMapping = [0], _0x9496ae.inputs = [_0x347002];
  
  for (var _0x1d93fc = 0; _0x1d93fc < windows.length; _0x1d93fc++) 
  {
    windows[_0x1d93fc].x < 0 && (windows[_0x1d93fc].x = 0), windows[_0x1d93fc].y < 0 && (windows[_0x1d93fc].y = 0), windows[_0x1d93fc].x > innerWidth - windows[_0x1d93fc].width && (windows[_0x1d93fc].x = innerWidth - windows[_0x1d93fc].width), windows[_0x1d93fc].y > innerHeight - windows[_0x1d93fc].height && (windows[_0x1d93fc].y = innerHeight - windows[_0x1d93fc].height);
  }
}

var tickCount = 0;

function draw() 
{
  background(255);
  
  for (var _0x413333 = 0; _0x413333 < windows.length; _0x413333++) 
  {
    var _0xa0bfd9 = windows[_0x413333].outputs, _0x26a512 = windows[_0x413333].inputs, _0x41c0a3 = windows[_0x413333].y + windows[_0x413333].height * 0.5;
	
    fill(0);
	
    for (var _0xab24df = 0; _0xab24df < windows[_0x413333].outputCount; _0xab24df++) 
	{
      var _0x59b89f = Math.floor(_0x41c0a3 - windows[_0x413333].outputCount * 6 + 12 * _0xab24df + 6), _0x2f95f7 = Math.floor(windows[_0x413333].x + windows[_0x413333].width + 8);
      rect(_0x2f95f7 - 1, _0x59b89f - 2, 3, 1), rect(_0x2f95f7 - 2, _0x59b89f - 1, 1, 3), rect(_0x2f95f7 - 1, _0x59b89f + 2, 3, 1), rect(_0x2f95f7 + 2, _0x59b89f - 1, 1, 3);
    }
	
    for (var _0xab24df = 0; _0xab24df < windows[_0x413333].inputCount; _0xab24df++) 
	{
      var _0x59b89f = Math.floor(_0x41c0a3 - windows[_0x413333].inputCount * 6 + 12 * _0xab24df + 6), _0x2f95f7 = Math.floor(windows[_0x413333].x - 8);
      rect(_0x2f95f7 - 1, _0x59b89f - 2, 3, 1), rect(_0x2f95f7 - 2, _0x59b89f - 1, 1, 3), rect(_0x2f95f7 - 1, _0x59b89f + 2, 3, 1), rect(_0x2f95f7 + 2, _0x59b89f - 1, 1, 3);
    }
	
    for (var _0xab24df = 0; _0xab24df < windows[_0x413333].outputCount; _0xab24df++) 
	{
      var _0x782e38 = Math.floor(_0x41c0a3 - windows[_0x413333].outputCount * 6 + 12 * _0xab24df + 6), _0x292306 = Math.floor(windows[_0x413333].x + windows[_0x413333].width + 8);
	  
      if (!_0xa0bfd9[_0xab24df]) 
	  {
        if (!(outputDragged[0] == windows[_0x413333] && outputDragged[1] == _0xab24df)) for (var _0x2a89de = 0; _0x2a89de < wireEnd.length; _0x2a89de++) 
		{
          for (var _0x2f3d01 = 0; _0x2f3d01 < wireEnd[_0x2a89de].length; _0x2f3d01++) 
		  {
            if (wireEnd[_0x2a89de][_0x2f3d01] == 0) fill(255); else wireEnd[_0x2a89de][_0x2f3d01] == 1 && fill(0);
			
            wireEnd[_0x2a89de][_0x2f3d01] != -1 && rect(_0x292306 + _0x2f3d01 - 4, _0x782e38 + _0x2a89de - 4, 1, 1);
          }
        }
      } 
	  
	  else 
	  {
        var _0x397957 = _0xa0bfd9[_0xab24df].y + _0xa0bfd9[_0xab24df].height * 0.5, _0x393a44 = -1;
        _0x393a44 = windows[_0x413333].inputMapping[_0xab24df];
		
        if (_0x393a44 != -1) 
		{
          var _0x25dd4e = Math.floor(_0x397957 - _0xa0bfd9[_0xab24df].inputCount * 6 + 12 * _0x393a44 + 6), _0xfbd3ae = Math.floor(_0xa0bfd9[_0xab24df].x - 8);
          outputDragged[0] == windows[_0x413333] && outputDragged[1] == _0xab24df && (_0xfbd3ae = mouseX - mousedx, _0x25dd4e = mouseY - mousedy);
		  
          fill(0);
		  
          if (_0xfbd3ae >= _0x292306) 
		  {
            var _0x3bffbc = Math.floor((_0x292306 + _0xfbd3ae) * 0.5);
            rect(_0x292306, _0x782e38, _0x3bffbc - _0x292306, 1), rect(_0x3bffbc, _0x782e38 + (_0x25dd4e < _0x782e38 ? 1 : 0), 1, _0x25dd4e - _0x782e38), rect(_0x3bffbc, _0x25dd4e, _0xfbd3ae - _0x3bffbc + 1, 1);
          } 
		  
		  else 
		  {
            var _0x33c065 = Math.floor((_0x782e38 + _0x25dd4e) * 0.5);
            rect(_0x292306, _0x782e38, 1, _0x33c065 - _0x782e38 + (_0x25dd4e > _0x782e38 ? 1 : 0)), rect(_0x292306 + (_0xfbd3ae > _0x292306 ? 1 : 0), _0x33c065, _0xfbd3ae - _0x292306, 1), rect(_0xfbd3ae, _0x33c065, 1, _0x25dd4e - _0x33c065 + (_0x25dd4e > _0x782e38 ? 1 : 0));
          }
		  
          fill(255), rect(_0x292306 - 1, _0x782e38 - 1, 3, 3), fill(0);
		  
          for (var _0x2a89de = 0; _0x2a89de < wireEnd.length; _0x2a89de++) 
		  {
            for (var _0x2f3d01 = 0; _0x2f3d01 < wireEnd[_0x2a89de].length; _0x2f3d01++) 
			{
              if (wireEnd[_0x2a89de][_0x2f3d01] == 0) fill(255); else wireEnd[_0x2a89de][_0x2f3d01] == 1 && fill(0);
              wireEnd[_0x2a89de][_0x2f3d01] != -1 && rect(_0xfbd3ae + _0x2f3d01 - 4, _0x25dd4e + _0x2a89de - 4, 1, 1);
            }
          }
        }
      }
	  
      if (outputDragged[0] == windows[_0x413333] && outputDragged[1] == _0xab24df) 
	  {
        var _0xfbd3ae = mouseX - mousedx, _0x25dd4e = mouseY - mousedy;
		
        fill(0);
		
        if (_0xfbd3ae >= _0x292306) 
		{
          var _0x3bffbc = Math.floor((_0x292306 + _0xfbd3ae) * 0.5);
		  
          rect(_0x292306, _0x782e38, _0x3bffbc - _0x292306, 1), rect(_0x3bffbc, _0x782e38 + (_0x25dd4e < _0x782e38 ? 1 : 0), 1, _0x25dd4e - _0x782e38), rect(_0x3bffbc, _0x25dd4e, _0xfbd3ae - _0x3bffbc + 1, 1);
        } 
		
		else 
		{
          var _0x33c065 = Math.floor((_0x782e38 + _0x25dd4e) * 0.5);
          rect(_0x292306, _0x782e38, 1, _0x33c065 - _0x782e38 + (_0x25dd4e > _0x782e38 ? 1 : 0)), rect(_0x292306 + (_0xfbd3ae > _0x292306 ? 1 : 0), _0x33c065, _0xfbd3ae - _0x292306, 1), rect(_0xfbd3ae, _0x33c065, 1, _0x25dd4e - _0x33c065 + (_0x25dd4e > _0x782e38 ? 1 : 0));
        }
		
        fill(255), rect(_0x292306 - 1, _0x782e38 - 1, 3, 3), fill(0);
		
        for (var _0x2a89de = 0; _0x2a89de < wireEnd.length; _0x2a89de++) 
		{
          for (var _0x2f3d01 = 0; _0x2f3d01 < wireEnd[_0x2a89de].length; _0x2f3d01++) 
		  {
            if (wireEnd[_0x2a89de][_0x2f3d01] == 0) fill(255); 
			
			else wireEnd[_0x2a89de][_0x2f3d01] == 1 && fill(0);
			
            wireEnd[_0x2a89de][_0x2f3d01] != -1 && rect(_0xfbd3ae + _0x2f3d01 - 4, _0x25dd4e + _0x2a89de - 4, 1, 1);
          }
        }
      }
    }
  }
  
  cursor("default");
  
  for (var _0x413333 = 0; _0x413333 < windows.length; _0x413333++) 
  {
    windows[_0x413333].draw();
	
	if(windows[_0x413333].type == "help")
	{
		windows[_0x413333].x = width - 160 - 20 - 40, windows[_0x413333].y = height - 332 - 47;
	}
  }
  
  tickCount++;
}

function drawNumber(value, posX, posY) {
  var offset = 0, numString = value.toString().split("");
  for (var index = 0; index < numString.length; index++) {
    !isNaN(parseInt(numString[index])) ? (image(GFX.numbers, posX + offset, posY, 8, 8, 8 * numString[index], 0, 8, 8), offset += 8) : (image(GFX.numbers, posX + offset, posY, 8, 8, 80, 0, 8, 8), offset += 3);
  }
}

function drawCaptionText(title, posX, posY) {
  var text = title.split(""), offset = 0, _0x2205e7 = "abcdefghijklmnopqrstuvwxyz".split(""), _0x35fa22 = {};
  for (var index = 0; index < _0x2205e7.length; index++) {
    _0x35fa22[_0x2205e7[index]] = index;
  }
  for (var index = 0; index < text.length; index++) {
    var _0x220d35 = text[index].toUpperCase() == text[index] ? GFX.text_uppercase : GFX.text_lowercase;
    text[index] != " " && image(_0x220d35, posX + offset, posY, 8, 11, 8 * _0x35fa22[text[index].toLowerCase()], 0, 8, 11), offset += letterWidth(text[index]);
  }
}

function drawText(_0x348cb6, _0x4d2d1c, _0x3fa377) {
  var _0x5a52fc = _0x348cb6.split(""), _0x82ee2a = 0, _0x7c6830 = 0, _0x384b6f = "abcdefghijklmnopqrstuvwxyz".split(""), _0x34ec15 = {};

  for (var _0x3757b9 = 0; _0x3757b9 < _0x384b6f.length; _0x3757b9++) 
  {
    _0x34ec15[_0x384b6f[_0x3757b9]] = _0x3757b9;
  }
  
  //Eulous thanks YandereDev for helping with this part /s
  for (var _0x3757b9 = 0; _0x3757b9 < _0x5a52fc.length; _0x3757b9++) {
    var _0x30fd9b = _0x5a52fc[_0x3757b9].toUpperCase() == _0x5a52fc[_0x3757b9] ? GFX.text_uppercase_black : GFX.text_lowercase_black;
    if (_0x5a52fc[_0x3757b9] == "\n") _0x7c6830 += 10, _0x82ee2a = 0; else {
      if (_0x5a52fc[_0x3757b9] == ".") image(GFX.text_symbols_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 0, 0, 8, 11), _0x82ee2a += 3; else {
        if (_0x5a52fc[_0x3757b9] == ",") image(GFX.text_symbols_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8, 0, 8, 11), _0x82ee2a += 3; else {
          if (_0x5a52fc[_0x3757b9] == "-") image(GFX.text_symbols_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 16, 0, 8, 11), _0x82ee2a += 7; else {
            if (_0x5a52fc[_0x3757b9] == "+") image(GFX.text_symbols_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 24, 0, 8, 11), _0x82ee2a += 6; else {
              if (_0x5a52fc[_0x3757b9] == "!") image(GFX.text_symbols_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 32, 0, 8, 11), _0x82ee2a += 3; else {
				  if (_0x5a52fc[_0x3757b9] == "(") image(GFX.text_symbols_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 45, 0, 8, 11), _0x82ee2a += 5; else {
					  if (_0x5a52fc[_0x3757b9] == ")") image(GFX.text_symbols_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 56, 0, 8, 11), _0x82ee2a += 5; else {
						if (_0x5a52fc[_0x3757b9] == "0") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 7; else {
						  if (_0x5a52fc[_0x3757b9] == "1") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 5; else {
							if (_0x5a52fc[_0x3757b9] == "2") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 6; else {
							  if (_0x5a52fc[_0x3757b9] == "3") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 6; else {
								if (_0x5a52fc[_0x3757b9] == "3") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 6; else {
								  if (_0x5a52fc[_0x3757b9] == "4") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 7; else {
									if (_0x5a52fc[_0x3757b9] == "5") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 6; else {
									  if (_0x5a52fc[_0x3757b9] == "6") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 6; else {
										if (_0x5a52fc[_0x3757b9] == "7") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 7; else {
										  if (_0x5a52fc[_0x3757b9] == "8") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 6; else {
											if (_0x5a52fc[_0x3757b9] == "9") image(GFX.text_numbers_black, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * parseInt(_0x5a52fc[_0x3757b9]), 0, 8, 11), _0x82ee2a += 6; else _0x5a52fc[_0x3757b9] != " " ? (image(_0x30fd9b, _0x4d2d1c + _0x82ee2a, _0x3fa377 + _0x7c6830, 8, 11, 8 * _0x34ec15[_0x5a52fc[_0x3757b9].toLowerCase()], 0, 8, 11), _0x82ee2a += letterWidth(_0x5a52fc[_0x3757b9])) : _0x82ee2a += 3;
										  }
										}
									  }
									}
								  }
								}
							  }
							}
						  }
						}
					  }
				  }
              }
            }
          }
        }
      }
    }
  }
}

//Vampires > furry

function updateFinalValues() {
  for (var _0x1b35c6 = 0; _0x1b35c6 < windows.length; _0x1b35c6++) {
    windows[_0x1b35c6].updateFinalValues(), windows[_0x1b35c6].filterNeedsUpdate = true;
  }
}
var stack = [], terminateSearch = false;
function checkLoop(_0x10804d, _0x59d59f) {
  stack = [], terminateSearch = false, traverse(_0x10804d, _0x59d59f, _0x10804d);
}
function traverse(_0x75afed, _0x50c3e8, _0x589fa8) {
  _0x75afed.outputs[_0x50c3e8] == _0x589fa8 && (terminateSearch = true);
  stack.push([_0x75afed, _0x50c3e8]);
  if (!terminateSearch) {
    connectedWindow = _0x75afed.outputs[_0x50c3e8];
    if (connectedWindow) for (var _0x4b3bdd = 0; _0x4b3bdd < connectedWindow.outputCount; _0x4b3bdd++) {
      connectedWindow.outputs[_0x4b3bdd] && traverse(connectedWindow, _0x4b3bdd, _0x589fa8);
    }
  }
  stack.pop([_0x75afed, _0x50c3e8]);
}

var mouseDragWindow, mousedx = 0, mousedy = 0, mousePressing = false, mouseDragEl, mouseCloseWindow, outputDragged = [], origKnobValue = 0, doubleClicking = false;

function mousePressed() {
  mousePressing = true;
  var _0x3e2643;
  outputDragged[0] && (outputDragged = []);
  for (var _0x57f0b2 = windows.length - 1; _0x57f0b2 >= 0; _0x57f0b2--) {
    var _0x41f39e = false;
    for (var _0x2bf035 = windows.length - 1; _0x2bf035 >= 0; _0x2bf035--) {
      if (mouseX >= windows[_0x2bf035].x && mouseX <= windows[_0x2bf035].x + windows[_0x2bf035].width && mouseY >= windows[_0x2bf035].y && mouseY <= windows[_0x2bf035].y + windows[_0x2bf035].height) {
        _0x3e2643 = windows[_0x2bf035], windows.splice(_0x2bf035, 1), windows.push(_0x3e2643);
        break;
      }
    }
    for (var _0x2bf035 = 0; _0x2bf035 < windows[_0x57f0b2].outputCount; _0x2bf035++) {
      var _0x310d27 = windows[_0x57f0b2].y + windows[_0x57f0b2].height * 0.5, _0x1611db = Math.floor(_0x310d27 - windows[_0x57f0b2].outputCount * 6 + 12 * _0x2bf035 + 6), _0xe20f9b = Math.floor(windows[_0x57f0b2].x + windows[_0x57f0b2].width + 8), _0x23617e = -1;
      windows[_0x57f0b2].outputs[_0x2bf035] && (_0x23617e = windows[_0x57f0b2].inputMapping[_0x2bf035]);
      if (_0x23617e != -1) {
        var _0x34198e = windows[_0x57f0b2].outputs[_0x2bf035].y + windows[_0x57f0b2].outputs[_0x2bf035].height * 0.5, _0x5db36f = Math.floor(_0x34198e - windows[_0x57f0b2].outputs[_0x2bf035].inputCount * 6 + 12 * _0x23617e + 6), _0xd2e310 = Math.floor(windows[_0x57f0b2].outputs[_0x2bf035].x - 8);
        if (mouseX >= _0xd2e310 - 4 && mouseX < _0xd2e310 + 4 && mouseY >= _0x5db36f - 4 && mouseY < _0x5db36f + 4) {
          outputDragged = [windows[_0x57f0b2], _0x2bf035], windows[_0x57f0b2].outputs[_0x2bf035].inputs[_0x23617e] = null, windows[_0x57f0b2].outputs[_0x2bf035] = null, mousedx = mouseX - _0xd2e310, mousedy = mouseY - _0x5db36f;
          break;
        }
      } else {
        if (mouseX >= _0xe20f9b - 4 && mouseX < _0xe20f9b + 4 && mouseY >= _0x1611db - 4 && mouseY < _0x1611db + 4) {
          outputDragged = [windows[_0x57f0b2], _0x2bf035], mousedx = mouseX - _0xe20f9b, mousedy = mouseY - _0x1611db;
          break;
        }
      }
    }
    var _0x144c7b = windows[_0x57f0b2].closeButton ? -13 : 0;
    mouseX >= windows[_0x57f0b2].x && mouseX < windows[_0x57f0b2].x + windows[_0x57f0b2].width + _0x144c7b && mouseY >= windows[_0x57f0b2].y && mouseY <= windows[_0x57f0b2].y + 12 && _0x3e2643 == windows[_0x57f0b2] && (mouseDragWindow = windows[_0x57f0b2], mousedx = mouseX - windows[_0x57f0b2].x, mousedy = mouseY - windows[_0x57f0b2].y, _0x41f39e = true);
    windows[_0x57f0b2].onClose() && windows[_0x57f0b2].closeButton && (mouseCloseWindow = windows[_0x57f0b2]);
    if (_0x41f39e) return;
  }
  if (_0x3e2643) for (var _0x57f0b2 = _0x3e2643.elements.length - 1; _0x57f0b2 >= 0; _0x57f0b2--) {
    if (_0x3e2643.elements[_0x57f0b2].type == "slider") {
      var _0x1fb7ea = _0x3e2643.elements[_0x57f0b2].getThumb(), _0x1164b6 = _0x3e2643.elements[_0x57f0b2].getTrack();
      if (mouseX >= _0x1fb7ea.x && mouseX < _0x1fb7ea.x + _0x1fb7ea.width && mouseY >= _0x1fb7ea.y && mouseY < _0x1fb7ea.y + _0x1fb7ea.height) {
        doubleClicking ? _0x3e2643.elements[_0x57f0b2].value = _0x3e2643.elements[_0x57f0b2].init : (mousedx = mouseX - _0x1fb7ea.x, mousedy = mouseY - _0x1fb7ea.y, mouseDragEl = _0x3e2643.elements[_0x57f0b2]);
        break;
      } else {
        if (mouseX >= _0x1164b6.x && mouseX < _0x1164b6.x + _0x1164b6.width && mouseY >= _0x1164b6.y && mouseY < _0x1164b6.y + _0x1164b6.height) {
          doubleClicking ? _0x3e2643.elements[_0x57f0b2].value = _0x3e2643.elements[_0x57f0b2].init : _0x3e2643.elements[_0x57f0b2].value = _0x3e2643.elements[_0x57f0b2].convertX(mouseX);
          break;
        }
      }
    }
    if (_0x3e2643.elements[_0x57f0b2].type == "knob") {
      var _0x3dd1d9 = _0x3e2643.elements[_0x57f0b2].getBody();
      if (mouseX >= _0x3dd1d9.x && mouseX < _0x3dd1d9.x + _0x3dd1d9.width && mouseY >= _0x3dd1d9.y && mouseY < _0x3dd1d9.y + _0x3dd1d9.height) {
        doubleClicking ? _0x3e2643.elements[_0x57f0b2].value = 0 : (mousedx = mouseX - _0x3dd1d9.x, mousedy = mouseY, mouseDragEl = _0x3e2643.elements[_0x57f0b2], origKnobValue = _0x3e2643.elements[_0x57f0b2].value);
        break;
      }
    }
    if (_0x3e2643.elements[_0x57f0b2].type == "buttoncopy" || _0x3e2643.elements[_0x57f0b2].type == "buttondmw" || _0x3e2643.elements[_0x57f0b2].type == "buttonwav") {
      var _0x56a13a = _0x3e2643.elements[_0x57f0b2].getBody();
      if (mouseX >= _0x56a13a.x && mouseX < _0x56a13a.x + _0x56a13a.width && mouseY >= _0x56a13a.y && mouseY < _0x56a13a.y + _0x56a13a.height) {
        mouseDragEl = _0x3e2643.elements[_0x57f0b2];
        break;
      }
    }
  }
  doubleClicking = false;
}

function doubleClicked() {
  doubleClicking = true, mousePressed();
}

function mouseDragged() {
  mouseDragWindow && (mouseDragWindow.x = mouseX - mousedx, mouseDragWindow.y = mouseY - mousedy, mouseDragWindow.x < 0 && (mouseDragWindow.x = 0), mouseDragWindow.y < 0 && (mouseDragWindow.y = 0), mouseDragWindow.x > innerWidth - mouseDragWindow.width && (mouseDragWindow.x = innerWidth - mouseDragWindow.width), mouseDragWindow.y > innerHeight - mouseDragWindow.height && (mouseDragWindow.y = innerHeight - mouseDragWindow.height)), mouseDragEl && (mouseDragEl.type == "slider" && (mouseDragEl.value = mouseDragEl.convertX(mouseX - mousedx)), mouseDragEl.type == "knob" && (mouseDragEl.value = Math.max(Math.min(origKnobValue - (mouseY - mousedy) * 0.01 * mouseDragEl.max, mouseDragEl.max), mouseDragEl.min)));
}

function mouseReleased() {
  mouseCloseWindow && (mouseCloseWindow.onClose() && mouseCloseWindow.remove());
  if (mouseDragEl) {
    if (mouseDragEl.type == "buttoncopy" || mouseDragEl.type == "buttondmw" || mouseDragEl.type == "buttonwav") {
      var _0x3bf675 = mouseDragEl.getBody();
      mouseX >= _0x3bf675.x && mouseX < _0x3bf675.x + _0x3bf675.width && mouseY >= _0x3bf675.y && mouseY < _0x3bf675.y + _0x3bf675.height && (mouseDragEl.click(), mouseDragEl = null);
    }
  }
  
  if (outputDragged[0]) {
    var _0x36ffb1 = false;
    for (var _0x5b5388 = windows.length - 1; _0x5b5388 >= 0; _0x5b5388--) {
      for (var _0x1db139 = 0; _0x1db139 < windows[_0x5b5388].inputCount; _0x1db139++) {
        var _0x4305fd = windows[_0x5b5388].y + windows[_0x5b5388].height * 0.5, _0x282914 = Math.floor(_0x4305fd - windows[_0x5b5388].inputCount * 6 + 12 * _0x1db139 + 6), _0x161083 = Math.floor(windows[_0x5b5388].x - 8), _0x535e04 = [...outputDragged[0].outputs];
        outputDragged[0].outputs[outputDragged[1]] = windows[_0x5b5388], checkLoop(outputDragged[0], 0), outputDragged[0].outputs = _0x535e04;
        if (_0x161083 >= mouseX - mousedx - 4 && _0x161083 <= mouseX - mousedx + 4 && _0x282914 >= mouseY - mousedy - 4 && _0x282914 <= mouseY - mousedy + 4 && !windows[_0x5b5388].inputs[_0x1db139] && !terminateSearch) {
          outputDragged[0].inputMapping[outputDragged[1]] = _0x1db139, windows[_0x5b5388].inputs[_0x1db139] = outputDragged[0], outputDragged[0].outputs[outputDragged[1]] = windows[_0x5b5388], outputDragged = [], _0x36ffb1 = true;
          break;
        }
      }
      if (_0x36ffb1) break;
    }
    !_0x36ffb1 && (outputDragged = []), updateFinalValues();
  }
  mousePressing = false, mouseDragWindow = null, mouseDragEl = null, mouseCloseWindow = null;
}

function setClipboard(_0x47182a) {
  navigator.clipboard.writeText(_0x47182a);
}

window.onresize = function () {
  resizeCanvas(innerWidth, innerHeight);
  for (var _0x1a2078 = 0; _0x1a2078 < windows.length; _0x1a2078++) {
    windows[_0x1a2078].x < 0 && (windows[_0x1a2078].x = 0), windows[_0x1a2078].y < 0 && (windows[_0x1a2078].y = 0), windows[_0x1a2078].x > innerWidth - windows[_0x1a2078].width && (windows[_0x1a2078].x = innerWidth - windows[_0x1a2078].width), windows[_0x1a2078].y > innerHeight - windows[_0x1a2078].height && (windows[_0x1a2078].y = innerHeight - windows[_0x1a2078].height);
  }
}, window.onkeydown = function (_0x16a731) {
  _0x16a731.preventDefault();
  if (!_0x16a731.ctrlKey && _0x16a731.shiftKey && _0x16a731.code == "KeyS") {
    fileExport();
    return;
  }
  
  var _0x48208d;
  !_0x16a731.shiftKey && _0x16a731.code == "KeyM" && (_0x48208d = new ElementWindow(mouseX - Math.floor(35), mouseY - Math.floor(25), "mixer")), _0x16a731.shiftKey && _0x16a731.code == "KeyM" && (_0x48208d = new ElementWindow(mouseX - Math.floor(35), mouseY - Math.floor(25), "splitter")), !_0x16a731.shiftKey && _0x16a731.code == "KeyI" && (_0x48208d = new ElementWindow(mouseX - Math.floor(35), mouseY - Math.floor(25), "inverter")), !_0x16a731.shiftKey && _0x16a731.code == "Digit7" && (_0x48208d = new ElementWindow(mouseX - Math.floor(80), mouseY - Math.floor(40), "osc")), !_0x16a731.shiftKey && _0x16a731.code == "Digit2" && (_0x48208d = new ElementWindow(mouseX - Math.floor(80), mouseY - Math.floor(40), "sawtooth")), !_0x16a731.shiftKey && _0x16a731.code == "Digit3" && (_0x48208d = new ElementWindow(mouseX - Math.floor(80), mouseY - Math.floor(40), "triangle")), !_0x16a731.shiftKey && _0x16a731.code == "Digit4" && (_0x48208d = new ElementWindow(mouseX - Math.floor(80), mouseY - Math.floor(46.5), "pulse")), !_0x16a731.shiftKey && _0x16a731.code == "Digit5" && (_0x48208d = new ElementWindow(mouseX - Math.floor(80), mouseY - Math.floor(27), "noise")), !_0x16a731.shiftKey && _0x16a731.code == "Digit6" && (_0x48208d = new ElementWindow(mouseX - Math.floor(80), mouseY - Math.floor(27), "pulsenoise")), _0x16a731.shiftKey && _0x16a731.code == "Digit5" && (_0x48208d = new ElementWindow(mouseX - Math.floor(80), mouseY - Math.floor(27), "noiseconsistent")), _0x16a731.shiftKey && _0x16a731.code == "Digit6" && (_0x48208d = new ElementWindow(mouseX - Math.floor(80), mouseY - Math.floor(27), "pulsenoiseconsistent")), !_0x16a731.shiftKey && _0x16a731.code == "KeyP" && (_0x48208d = new ElementWindow(mouseX - Math.floor(70), mouseY - Math.floor(37.5), "phasemodulation")), !_0x16a731.shiftKey && _0x16a731.code == "KeyR" && (_0x48208d = new ElementWindow(mouseX - Math.floor(70), mouseY - Math.floor(37.5), "ringmodulation")), !_0x16a731.shiftKey && _0x16a731.code == "KeyG" && (_0x48208d = new ElementWindow(mouseX - Math.floor(70), mouseY - Math.floor(37.5), "gainer")), !_0x16a731.shiftKey && _0x16a731.code == "KeyQ" && (_0x48208d = new ElementWindow(mouseX - Math.floor(70), mouseY - Math.floor(37.5), "quantizer")), !_0x16a731.shiftKey && _0x16a731.code == "KeyB" && (_0x48208d = new ElementWindow(mouseX - Math.floor(70), mouseY - Math.floor(37.5), "bitcrusher")), !_0x16a731.shiftKey && _0x16a731.code == "KeyL" && (_0x48208d = new ElementWindow(mouseX - Math.floor(83.5), mouseY - Math.floor(44), "lowpass")), !_0x16a731.shiftKey && _0x16a731.code == "KeyH" && (_0x48208d = new ElementWindow(mouseX - Math.floor(83.5), mouseY - Math.floor(44), "highpass")), !_0x16a731.shiftKey && _0x16a731.code == "KeyS" && (_0x48208d = new ElementWindow(mouseX - Math.floor(70), mouseY - Math.floor(37.5), "syncer")), !_0x16a731.shiftKey && _0x16a731.code == "KeyF" && (_0x48208d = new ElementWindow(mouseX - Math.floor(70), mouseY - Math.floor(37.5), "feedback")), _0x48208d && (_0x48208d.x < 0 && (_0x48208d.x = 0), _0x48208d.y < 0 && (_0x48208d.y = 0), _0x48208d.x > innerWidth - _0x48208d.width && (_0x48208d.x = innerWidth - _0x48208d.width), _0x48208d.y > innerHeight - _0x48208d.height && (_0x48208d.y = innerHeight - _0x48208d.height));
};

var windowtypes = ["output", "help", "sine", "sawtooth", "triangle", "pulse", "noise", "pulsenoise", "noiseconsistent", "pulsenoiseconsistent", "mixer", "splitter", "inverter", "feedback", "phasemodulation", "ringmodulation", "gainer", "sync", "quantization", "bitcrusher", "lowpass", "highpass", "osc"];

function fileExport() 
{
	return;
  var _0x4a04f4 = [];
  
  _0x4a04f4.push("W".charCodeAt(0)), _0x4a04f4.push("S".charCodeAt(0)), _0x4a04f4.push(1), _0x4a04f4.push(windows.length);
  
  for (var _0x56e230 = 0; windows.length; _0x56e230++) {
    windows[_0x56e230].id = _0x56e230;
  }
  
  for (var _0x56e230 = 0; windows.length; _0x56e230++) {
    var _0x208ea7 = -1;
	
    for (var _0x43c28f = 0; _0x43c28f < windowstypes.length; _0x43c28f++) {
      windowtypes[_0x43c28f] == windows[_0x56e230].type && (_0x208ea7 = _0x43c28f);
    }
	
    if (_0x208ea7 == -1) continue;
    _0x4a04f4.push(_0x208ea7), _0x4a04f4.push(Math.floor(windows[_0x56e230].x / 256)), _0x4a04f4.push(windows[_0x56e230].x % 256), _0x4a04f4.push(Math.floor(windows[_0x56e230].y / 256)), _0x4a04f4.push(windows[_0x56e230].y % 256);
	
    for (var _0x43c28f = 0; _0x43c28f < windows[_0x56e230].inputCount; _0x43c28f++) {
      _0x4a04f4.push(windows[_0x56e230].inputs[_0x43c28f].id);
    }
	
    for (var _0x43c28f = 0; _0x43c28f < windows[_0x56e230].outputCount; _0x43c28f++) {
      _0x4a04f4.push(windows[_0x56e230].outputs[_0x43c28f].id);
    }
	
    switch (windows[_0x56e230].type) 
	{
      case "output":
        _0x4a04f4.push(windows[_0x56e230].waveLength);
        break;
		
      case "help":
        break;
		
      case "sine":
        _0x4a04f4.push(windows[_0x56e230].multiplier), _0x4a04f4.push(Math.floor(windows[_0x56e230].mod_multiplier * 100 / 12) + 100), _0x4a04f4.push(windows[_0x56e230].phase * 100), _0x4a04f4.push(Math.floor(windows[_0x56e230].mod_phase * 100) + 100), _0x4a04f4.push(windows[_0x56e230].amplitude * 100), _0x4a04f4.push(Math.floor(windows[_0x56e230].mod_amplitude * 100) + 100);
    }
  }
  
  var _0x575a5c = new Blob([new Uint8Array(_0x4a04f4)], {type: "application/octet-stream"});
  saveAs(URL.createObjectURL(_0x575a5c), "patch.eup"), URL.revokeObjectURL(_0x575a5c);
}

function saveAs(_0x13b349, _0x5c764f) 
{
  var _0x5ef30e = document.createElement("a");
  
  typeof _0x5ef30e.download === "string" ? (_0x5ef30e.href = _0x13b349, _0x5ef30e.download = _0x5c764f, document.body.appendChild(_0x5ef30e), _0x5ef30e.click(), document.body.removeChild(_0x5ef30e)) : window.open(_0x13b349);
}