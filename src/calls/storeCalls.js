export const getFilteredPosts = (postList, {
  text,
  sortBy = 'createdAt',
  startDate,
  endDate,
  ordering
}) => {
  const finalList = postList.filter((post) => {
    const startDateMatch = typeof startDate === 'number' && post.createdAt >= startDate;
    const endDateMatch = typeof endDate === 'number' && post.createdAt <= endDate;
    const textMatch = post.content.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch
  }).sort((current, next) => {
    return current.createdAt < next.createdAt ? 1 : -1;
  });

  return ordering==='newest' ? finalList : finalList.reverse()
}
