import { Route } from '@angular/router';

export const ANIMATION_ROUTES: Route = {
  path: 'animations',
  children: [
    {
      path: 'configuration',
      loadComponent: () =>
        import(
          './pages/animations/animation-configuration-page/animation-configuration-page.component'
        ).then((f) => f.AnimationConfigurationPageComponent),
    },
    {
      path: 'fade-in',
      loadComponent: () =>
        import('./pages/animations/fade-in-page/fade-in-page.component').then(
          (f) => f.FadeInPageComponent
        ),
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/doc/animations/configuration',
    },
  ],
};
