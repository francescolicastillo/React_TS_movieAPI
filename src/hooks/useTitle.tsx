import React, { useEffect } from 'react'

export const useTitle = ( title: string ) => {

  useEffect(() => {
    document.title = `${title} | MovieFinder`;
  })

  return null;
}
