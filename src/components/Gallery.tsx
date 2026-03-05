import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Gallery = () => {
  const images = [
    "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/639147525_122097139335278640_8040445261282281131_n.jpg?stp=c0.33.489.489a_dst-jpg_s552x414_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a934a8&_nc_ohc=aXdHE7DAOkkQ7kNvwG5RnAR&_nc_oc=AdklVmAbPpLz1tGrwaRJnsX0deR7_n5PCNd2J0ZljhLMXvDq-SNB26MHH4SbzdnP8kg-Jm5PUa-CAnutZru4GCvu&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=1rKo3-ZIYABjGiWQlZYshw&_nc_ss=8&oh=00_Afw9JdxKzmNmRL1M3-6jBp3cHOEXbigB8xFr2mvU0n7Wcg&oe=69AE6E37",
    "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/639948027_122097139203278640_6205655606171457659_n.jpg?stp=c0.48.445.445a_dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=a934a8&_nc_ohc=Ts4n9XWsjOIQ7kNvwEc4z8c&_nc_oc=AdlvkqweO_Gh89ODzjZMujgxSLsRHZ3vgmh0yKwZx5DTLZFCxsepLWO-4DWkoohPjvls1KYzWmJsXobRwSg4XALG&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=1rKo3-ZIYABjGiWQlZYshw&_nc_ss=8&oh=00_Afxclloi6Mj8inCi3uQaGb2F2mbpZN9yUs91xaJQic6Ebw&oe=69AE743A",
    "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/628632497_122097132819278640_6709126208625457584_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=111&ccb=1-7&_nc_sid=a934a8&_nc_ohc=QtmFd4zD4oEQ7kNvwEH9Px0&_nc_oc=AdnkkNnOHTk0IYGBZx_nngDNbO_fSzBBCOQK09APMy1sIJY0_PBhMLS8Ulrl1SmGJvGv60rTIzdSHpYJEKokXFb1&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=1rKo3-ZIYABjGiWQlZYshw&_nc_ss=8&oh=00_AfwYo_8qz-2wIzZZ7_EarVywDTI8RYtk5K6KCH__agPCeA&oe=69AE74C5",
    "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/637700216_122097132747278640_7947172791271094657_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a934a8&_nc_ohc=dtnHcPjkek0Q7kNvwGj5RkG&_nc_oc=AdmJMGYJHtUUSafb1wPL3yM2VaBZgsXLryLSd2jPwBmRKXPmenf-5GDOnKDe9IjBy5jtNoqWXAeMYUJorrrsh8tw&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=1rKo3-ZIYABjGiWQlZYshw&_nc_ss=8&oh=00_AfzFlSgWNuyraiIB1l_s25VJij5r685ml1hGUncHZpPxtw&oe=69AE827A"
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Our Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">See the Royal Difference</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results from real clients across Dallas-Fort Worth.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((src, index) => (
            <div key={index}>
              <FadeIn delay={index * 0.1}>
                <div 
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer border border-white/10"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Before and After ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm">View Larger</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
