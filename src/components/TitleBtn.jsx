import React from "react"

export default function TitleBtn({ title }) {
  return (
    <div className="px-3 py-2 bg-primary inline-flex justify-center gap-2 items-center rounded-xl mb-6">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#131C1E" />
        <path
          d="M10 3C9.66563 9.89062 9.39062 10.1656 2.5 10.5C9.39062 10.8344 9.66563 11.1094 10 18C10.3344 11.1094 10.6094 10.8344 17.5 10.5C10.6094 10.1656 10.3344 9.89062 10 3Z"
          fill="#B6EC3D"
        />
      </svg>
      {title}
    </div>
  )
}
