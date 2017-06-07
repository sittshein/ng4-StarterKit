import { Ng4StarterKitPage } from './app.po';

describe('ng4-starter-kit App', () => {
  let page: Ng4StarterKitPage;

  beforeEach(() => {
    page = new Ng4StarterKitPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to my!!'))
      .then(done, done.fail);
  });
});
