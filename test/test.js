const {expect } = require('chai');

const { formatDate, toLine, toHump } = require('../src/utils/common');
describe(('单元测试写法'), ()=> {
    it('日期格式化测试', ()=> {
        expect( formatDate(new Date())).to.be.equal('2021-06-26')
    })
    it('驼峰转下划线', function() {
        expect(toLine('userInfo')).to.be.equal('user_info')
    })
    it('下划线转驼峰', function() {
        expect(toHump('user_info')).to.be.equal('userInfo')
    })
} )