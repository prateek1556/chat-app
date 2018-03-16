var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',() => {
    it('should generate correct message object', () => {
        var from = "Prateek";
        var text = "some info";
        var message = generateMessage(from,text);
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
           from:from,
           text: text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = "Prateek";
        var lan = 1;
        var lng = 1;
        var message = generateLocationMessage(from,lan,lng);
        var url =  `https://www.google.com/maps?q=1,1`;
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url
        });
       
    });
});
