export function testRouter(useRouter: any, query: any, push: any) {
  useRouter.mockReturnValue({
    query,
    push
  })
}
