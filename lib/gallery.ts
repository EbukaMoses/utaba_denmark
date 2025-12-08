import galleryData from '@/data/gallery.json';

export interface GalleryItem {
  src: string;
  type: 'image' | 'video';
  alt: string;
}

export const getGalleryItems = (): GalleryItem[] => {
  return galleryData.map((url: string) => {
    // Determine type based on URL path
    const isVideo = url.includes('/video/upload/') || url.endsWith('.mp4') || url.endsWith('.mov');
    const type = isVideo ? 'video' as const : 'image' as const;

    // Extract filename for alt text
    const urlParts = url.split('/');
    const filename = urlParts[urlParts.length - 1];
    const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|webp|mp4|mov)$/i, '');
    const alt = nameWithoutExt.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '');

    return {
      src: url,
      type,
      alt: alt || `Gallery item ${urlParts.length}`
    };
  });
};

export const getPaginatedGalleryItems = (page: number = 1, itemsPerPage: number = 20) => {
  const allItems = getGalleryItems();
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = allItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  return {
    items: paginatedItems,
    currentPage: page,
    totalPages,
    totalItems: allItems.length,
    hasNextPage: endIndex < allItems.length,
    hasPreviousPage: startIndex > 0
  };
};
