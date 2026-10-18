import Image from 'next/image';

type BrandMarkProps = {
  className?: string;
  alt?: string;
};

export function BrandMark({ className = 'h-9 w-9', alt = 'Landlord HQ' }: BrandMarkProps) {
  return (
    <Image
      src="/brand/logo-icon.png"
      alt={alt}
      width={128}
      height={128}
      className={`rounded-[20%] ${className}`}
    />
  );
}
