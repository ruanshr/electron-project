declare global {
  interface Window {
    electronApi: {
      setTitle: (string) => void
    }
  }
}
