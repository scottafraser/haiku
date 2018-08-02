import {Haiku} from '../src/haiku';

describe ('Haiku', function() {
  let poem;
  let sample;


  beforeEach(function() {
    poem = new Haiku("i mean were looking", "down on waynes basement only", "thats not waynes basement");
    sample = ["i mean were looking".split(' '), "down on waynes basement only".split(' '), "thats not waynes basement".split(' ')]

  });


  it ('should remove silent e', function() {
    sample = "i mean wer looking".split(' ')
    let result = poem.removeSilentE();
    expect(result).toEqual(sample);
  });

  it ('should clean silent vowels', function() {
    let newSample = "i man were loking".split(' ')

    let result = poem.removeSilentDouble()
    expect(result).toEqual(newSample);
  });

  it ('should clean count vowels', function() {
    let newNumber = 8
    let result = poem.countVowels(poem.line1)
    expect(result).toEqual(newNumber);
  });

  it ('should test haiku', function() {
    let result = poem.isHaiku();
    expect(result).toEqual(true);
  });




});
