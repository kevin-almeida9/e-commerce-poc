export const getTypeDevice = (): 'mobile' | 'desktop' => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return 'mobile'
  } else {
    return 'desktop'
  }
}
