declare module '#app' {
  interface NuxtApp {
   $movieApiFetch: $Fetch<unknown, NitroFetchRequest>
 }
 }

declare module '@nuxt/types/config/env' {
  interface NuxtOptionsEnv {
    movieApiUrl: string
    movieApiToken: string
  }
}

export {}
