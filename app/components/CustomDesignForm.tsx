'use client'

import { useState } from 'react'

const CustomDesignForm = () => {
  const [description, setDescription] = useState('')
  const [style, setStyle] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Custom design request submitted:', { description, style, file })
    // Reset form or show confirmation message
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">Design Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
          rows={4}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="style" className="block mb-2">Tattoo Style</label>
        <select
          id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a style</option>
          <option value="traditional">Traditional</option>
          <option value="realism">Realism</option>
          <option value="watercolor">Watercolor</option>
          <option value="tribal">Tribal</option>
          <option value="japanese">Japanese</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="file" className="block mb-2">Upload Reference Image</label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          className="w-full p-2 border rounded"
          accept="image/*"
        />
      </div>
      <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
        Submit Request
      </button>
    </form>
  )
}

export default CustomDesignForm