export const getImageUrl = (imageUrl) => {
  return `${import.meta.env.VITE_API_URI}/${imageUrl}`
}
