export class BasePage {
    async sendKeys(dataObject: object) {
    for (const [key, value] of Object.entries(dataObject)) {
      await this[key].fill(value);
    }
  }

  async click(dataObject: object) {
    for (const [key] of Object.entries(dataObject)) {
      await this[key].click();
    }
  }

  async getText(dataObject: object) {
    for (const [key] of Object.entries(dataObject)) {
      dataObject[key] = await this[key].textContent();
    }
    return dataObject;
  }

    async isVisible(dataObject: object) {
    for (const [key] of Object.entries(dataObject)) {
      await this[key].waitFor({ visible: true }, 10000);
      dataObject[key] = await this[key].isVisible();
    }
    return dataObject;
  }

  async scrollToElement(dataObject: object) {
      for (const [key] of Object.entries(dataObject)) {
      await this[key].scrollIntoViewIfNeeded();
    }
  }

  async hover(dataObject: object) {
    for (const [key] of Object.entries(dataObject)) {
    await this[key].hover();
    }
  }
}