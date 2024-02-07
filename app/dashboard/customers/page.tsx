import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <div className='w-full'>
      <Suspense key={ query } fallback={ <InvoicesTableSkeleton /> }>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  );
}
