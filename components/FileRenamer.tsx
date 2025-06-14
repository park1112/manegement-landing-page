'use client'

import React, { useState } from 'react'
import JSZip from 'jszip'

interface FileItem {
  id: string
  originalName: string
  newName: string
  file: File
}

export default function FileRenamer() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [prefix, setPrefix] = useState('file')
  const [startNumber, setStartNumber] = useState(1)
  const [digitPadding, setDigitPadding] = useState(3)
  const [isDragging, setIsDragging] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const processFiles = (selectedFiles: File[]) => {
    const newFiles = selectedFiles.map((file, index) => {
      const ext = file.name.split('.').pop() || ''
      const paddedNumber = String(startNumber + index).padStart(digitPadding, '0')
      const newName = `${prefix}_${paddedNumber}.${ext}`
      
      return {
        id: Math.random().toString(36).substr(2, 9),
        originalName: file.name,
        newName: newName,
        file: file
      }
    })
    
    setFiles(newFiles)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    processFiles(selectedFiles)
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles.length > 0) {
      processFiles(droppedFiles)
    }
  }

  const updateFileName = (id: string, newName: string) => {
    setFiles(files.map(f => 
      f.id === id ? { ...f, newName } : f
    ))
  }

  const downloadFiles = async () => {
    setIsDownloading(true)
    
    try {
      const zip = new JSZip()
      
      // 모든 파일을 ZIP에 추가
      for (const fileItem of files) {
        const arrayBuffer = await fileItem.file.arrayBuffer()
        zip.file(fileItem.newName, arrayBuffer)
      }
      
      // ZIP 파일 생성
      const blob = await zip.generateAsync({ 
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: {
          level: 6
        }
      })
      
      // ZIP 파일 다운로드
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `renamed_files_${new Date().getTime()}.zip`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error creating zip:', error)
      alert('파일 압축 중 오류가 발생했습니다.')
    } finally {
      setIsDownloading(false)
    }
  }

  const regenerateNames = () => {
    setFiles(files.map((file, index) => {
      const ext = file.originalName.split('.').pop() || ''
      const paddedNumber = String(startNumber + index).padStart(digitPadding, '0')
      const newName = `${prefix}_${paddedNumber}.${ext}`
      
      return {
        ...file,
        newName: newName
      }
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">파일 이름 일괄 변경</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">설정</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                파일명 접두사
              </label>
              <input
                type="text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                시작 번호
              </label>
              <input
                type="number"
                value={startNumber}
                onChange={(e) => setStartNumber(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                자릿수
              </label>
              <input
                type="number"
                value={digitPadding}
                onChange={(e) => setDigitPadding(parseInt(e.target.value) || 1)}
                min="1"
                max="5"
                className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          
          <button
            onClick={regenerateNames}
            disabled={files.length === 0}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            이름 재생성
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            파일 선택 {files.length > 0 && <span className="text-sm font-normal text-gray-600">({files.length}개 선택됨)</span>}
          </h2>
          
          <div className="mb-6">
            <label 
              className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                isDragging 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
              }`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6 pointer-events-none">
                <svg className={`w-10 h-10 mb-3 ${isDragging ? 'text-green-500' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mb-2 text-sm text-gray-700">
                  <span className="font-semibold">클릭하여 파일 선택</span> 또는 드래그 앤 드롭
                </p>
                <p className="text-xs text-gray-600">여러 파일 선택 가능</p>
              </div>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {files.length > 0 && (
            <>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-gray-900">파일 목록</h3>
                  <button
                    onClick={() => setFiles([])}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    모두 지우기
                  </button>
                </div>
                <div className="space-y-2">
                  {files.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">원본: {file.originalName}</p>
                        <input
                          type="text"
                          value={file.newName}
                          onChange={(e) => updateFileName(file.id, e.target.value)}
                          className="mt-1 w-full px-2 py-1 text-sm text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={downloadFiles}
                disabled={isDownloading}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    압축 중...
                  </>
                ) : (
                  'ZIP 파일로 다운로드'
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}