function initSingleton(ClassPage: any, ctx) {
  if (ClassPage._instance) {
    return ClassPage._instance;
  }
  const page = new ClassPage(ctx);
  ClassPage._instance = page;
  return ClassPage._instance;
}

export { initSingleton };
