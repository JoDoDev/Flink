import { FlinkPage } from './app.po';

describe('flink App', () => {
  let page: FlinkPage;

  beforeEach(() => {
    page = new FlinkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
