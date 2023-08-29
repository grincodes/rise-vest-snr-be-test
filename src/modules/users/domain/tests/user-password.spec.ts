import { maxHashedLength } from "../../../../lib/common/constants";
import { UserPassword } from "../UserPassword"
import 'reflect-metadata'

let validPassword;
let invalidPassword;
let hashedPassword;
describe('User Password', () => { 

    beforeEach(()=>{
        validPassword = 'Power123@';
        invalidPassword= '123Jk'
        hashedPassword= "$2a$10$rk0ncKKARt3uudF0h.zeNOOoPZGm7xacKtPOtsnxYpYbtpZBQ42SG"
    })

it('should return a hash value of password',()=>{

    const userPasswordOrError =  UserPassword.create({value:validPassword})
    expect(userPasswordOrError.getValue().getHashedValue()).toHaveLength(maxHashedLength)
    expect(userPasswordOrError.isSuccess).toBeTruthy()
    
})

it('should return error for invalid password',()=>{
    const userPasswordOrError =  UserPassword.create({value:invalidPassword})
    expect(userPasswordOrError.isSuccess).toBeFalsy()
})

it('should compare password and hash with boolean result ',()=>{
    const userPasswordOrError =  UserPassword.create({value:validPassword})

    const userPassword = userPasswordOrError.getValue()

    expect( userPassword.comparePassword(validPassword)).toBeTruthy()
})

it('should check if password value is already hashed and return boolean result ',()=>{
    expect(UserPassword.isAlreadyHashed(hashedPassword)).toBeTruthy();
})


 })