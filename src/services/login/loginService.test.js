import loginService from './loginService'

const token = 'fake-token'
const setCookieModule = jest.fn()
const HttpClientModule = async () => ({ data: { token } })
const HttpClientModuleError = async () => ({ data: {}, error: { message: 'Failed to login' } })

describe('loginService', () => {
  describe('login()', () => {
    describe('when user try to login', () => {
      describe('and succeed', () => {
        test("store it's token", async () => {
          const loginServiceResponse = await loginService.login(
            {
              username: 'someUserName',
              password: 'somePassword'
            },
            setCookieModule,
            HttpClientModule
          )

          expect(setCookieModule).toHaveBeenCalledWith(null, 'APP_TOKEN', token, {
            path: '/',
            maxAge: 7 * 24 * 60 * 60 // 7 days
          })

          expect(loginServiceResponse).toEqual({ token })
        })
      })

      describe('and it fails', () => {
        test('throws an error', async () => {
          await expect(
            loginService.login(
              {
                username: 'someUserName',
                password: 'somePassword'
              },
              setCookieModule,
              HttpClientModuleError
            )
          ).rejects.toThrow('Failed to login')
        })
      })
    })
  })

  describe('logout()', () => {
    describe('when user try to logout and succeed', () => {
      test("remove it's token", async () => {
        const destroyCookieModule = jest.fn()

        await loginService.logout(destroyCookieModule)

        expect(destroyCookieModule).toHaveBeenCalledWith(null, 'APP_TOKEN')
      })
    })
  })
})
