import { User, UserProps } from "../User";
import { UserPassword } from "../UserPassword";
import 'reflect-metadata';


let validUserProps: UserProps;
let invalidUserProps: UserProps;

describe('User', () => { 

    beforeEach(()=>{
        validUserProps = {
            firstName:"shola",
            lastName:"jide",
            password: "Power123@",
            email:"shola.jide@gmail.com",

        }

        invalidUserProps = {
            firstName:"ade",
            lastName:"ok",
            password:"12345",
            email:"ade.ok@gmail.com",

        }
    })


    describe('createUser', () => { 

        it('should create user',()=>{
                const userOrError = User.create(validUserProps)
                console.log(userOrError.errorValue())
                expect(userOrError.isSuccess).toBeTruthy()
        })
    })

    describe('validateUser',()=>{
        it('should return an error result when provided invalid props',()=>{
            const userOrError = User.create(invalidUserProps)
            expect(userOrError.isSuccess).toBeFalsy()
        })
    })


 })