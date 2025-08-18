const TextSkeleton = ({ size = '3xs' }) => {
    return (
        <div className="animate-pulse space-y-4 cursor-progress">
            <div className={`h-4 bg-gray-300 rounded w-${size}`} />
        </div>
    );
}

export { TextSkeleton };