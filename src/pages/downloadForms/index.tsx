'use client';
import React from 'react';
import { DownloadIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';
import Link from 'next/link';
import Image from 'next/image';

type FormItem = {
  id: number;
  title: string;
  description: string;
  fileUrl: string;
  thumbnail: string;
};

const forms: FormItem[] = [
  {
    id: 1,
    title: 'Membership Application Form',
    description: 'Apply for Blue Sky membership with this form.',
    fileUrl: '/images/form.png',
    thumbnail: '/images/form.png',
  },
  {
    id: 2,
    title: 'Employee Data Sheet Employee Data Sheet Employee Data Sheet Employee Data Sheet ',
    description: 'Submit your biodata using this DOCX file. Submit your biodata using this DOCX file. Submit your biodata using this DOCX file.',
    fileUrl: '/images/form.png',
    thumbnail: '/images/form.png',
  },
  {
    id: 3,
    title: 'Vendor Registration Form',
    description: 'Register as a vendor by submitting this form.',
    fileUrl: '/images/form.png',
    thumbnail: '/images/form.png',
  },
];

const getFileTypeColor = (type: string) => {
  switch (type) {
    case 'pdf':
      return 'bg-red-600';
    case 'docx':
      return 'bg-blue-600';
    case 'xlsx':
      return 'bg-green-600';
    case 'zip':
      return 'bg-gray-600';
    default:
      return 'bg-slate-500';
  }
};

const DownloadFormsPage: React.FC = () => {
  return (
    <section>
      <EveryPageHeroSection
        title="Download Forms"
        imageUrl="/images/landing.jpg"
      />

      <Container className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((form) => (
            <div
              key={form.id}
              className="p-6 bg-white shadow rounded-lg border border-gray-100 hover:shadow-md transition"
            >
              <Image
                src={form.thumbnail}
                alt={form.title}
                width={600}
                height={300}
                className="w-full h-96 object-cover rounded mb-4"
              />

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold truncate">{form.title}</h3>
                  <p className="text-sm text-gray-600 truncate">{form.description}</p>
                </div>

                <Link
                  href={form.fileUrl}
                  target="_blank"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded hover:bg-blue-800 transition whitespace-nowrap"
                >
                  <DownloadIcon className="mr-2 w-4 h-4" />
                  Download
                </Link>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DownloadFormsPage;
