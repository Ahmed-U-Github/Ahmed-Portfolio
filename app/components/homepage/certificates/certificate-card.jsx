function CertificateCard({ certificate }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <img
          src={certificate.file}
          alt={certificate.display}
          className="h-full w-full object-contain group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-4">
        <a 
          href={certificate.credlyUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-medium text-white hover:text-violet-500"
        >
          {certificate.display}
        </a>
      </div>
    </div>
  );
}

export default CertificateCard;
