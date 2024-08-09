/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/App` | `/Details` | `/Home` | `/_sitemap` | `/databases/item` | `/signIn` | `/signUp` | `/themeColors`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
