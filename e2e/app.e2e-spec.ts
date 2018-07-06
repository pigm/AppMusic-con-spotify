import { SpotifyAppCursoPage } from './app.po';

describe('spotify-app-curso App', () => {
  let page: SpotifyAppCursoPage;

  beforeEach(() => {
    page = new SpotifyAppCursoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
