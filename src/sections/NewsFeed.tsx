import React, { useState } from 'react'
import Article from '../components/Article'
import ArticleSlider from '../components/ui/ArticleSlider'
import { Article_Data } from '../constants/ArticlesData';

interface NewsFeedProps {
  initialSelectedArticleId: number; 
}

const NewsFeed: React.FC<NewsFeedProps> = ({ initialSelectedArticleId }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<number>(initialSelectedArticleId);

  const selectedArticle = Article_Data.find((article) => article.id === selectedArticleId);
  
         // Handle the click event to update the selected article
         const handleArticleClick = (id: number) => {
          setSelectedArticleId(id);
        };
  return (
    <div className="bg-[var(--color-background-primary)] flex justify-center items-center px-10 xl:px-15 2xl:px-25 ">
      <div className='justify-center items-start flex min-[800px]:flex-row flex-col '>
        <div className='min-[800px]:w-[60%]'>{selectedArticle && <Article article={selectedArticle} />}</div>
      
        <div className='min-[800px]:w-[40%]  '><ArticleSlider onArticleClick={handleArticleClick} /></div>

      </div>
      
      </div>
  )
}

export default NewsFeed