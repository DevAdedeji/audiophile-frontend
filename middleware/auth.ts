export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser();
  if (to.path !== "/") {
    if (!user.value) {
      return navigateTo("/");
    }
  }
});
