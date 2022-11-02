import { useState, createContext } from 'react'

export const RatingContext = createContext()

export default function RatingContextProvider({ children }) {
    const [comments, setComments] = useState([])
    const addComment = (commentItem) => {
        setComments([...comments,...commentItem])
    }
    const value = {comments, addComment}
    
    return (
        <RatingContext.Provider value={value}>{children}</RatingContext.Provider>
    )
}
