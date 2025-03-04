export {};

declare global {
  interface Window {
    Card: {
      new (options: {
        form: string;
        container: string;
        formSelectors: {
          numberInput: string;
          expiryInput: string;
          cvcInput: string;
          nameInput: string;
        };
      }): void;
    };
  }
}
