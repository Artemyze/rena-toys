const detectDarkMode = () => {
    if (window.matchMedia && window.matchMedia('(prefer-color-scheme: dark)').matches) {
        return 'dark'
    }
    return 'light'
}

export default detectDarkMode