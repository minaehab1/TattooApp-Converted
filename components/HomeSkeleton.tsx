import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const HomeSkeleton = () => {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <Skeleton width={150} height={30} />
        <Skeleton circle width={40} height={40} />
      </div>
      <div className="text-center">
        <Skeleton width={200} height={30} />
        <Skeleton width={150} height={20} />
      </div>
      <div>
        <Skeleton width={150} height={24} />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} height={100} />
          ))}
        </div>
      </div>
      <div>
        <Skeleton width={150} height={24} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} height={40} />
          ))}
        </div>
      </div>
      <div>
        <Skeleton width={150} height={24} />
        <Skeleton height={100} />
      </div>
      
      <div>
        <Skeleton width={150} height={24} />
        <div className="space-y-4 mt-4">
          {[...Array(2)].map((_, i) => (
            <div key={i}>
              <Skeleton height={80} />
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <Skeleton width={150} height={24} />
        <div className="space-y-4 mt-4">
          {[...Array(2)].map((_, i) => (
            <div key={i}>
              <Skeleton height={80} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}