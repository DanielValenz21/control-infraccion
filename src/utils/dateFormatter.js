// src/utils/dateFormatter.js
export function formatDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-GT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }