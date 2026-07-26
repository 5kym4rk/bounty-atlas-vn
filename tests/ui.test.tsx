import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BulletList, ExternalLink, CodeBlock, Chip } from '@/components/ui';
import { SAFETY_STATEMENT_VI, STOP_TESTING_RULES_VI } from '@/config/safety';
import { PRODUCT } from '@/config/product';

function wrap(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('ExternalLink', () => {
  it('render thẻ a có rel an toàn cho URL https', () => {
    wrap(<ExternalLink href="https://example.com/tai-lieu">Tài liệu</ExternalLink>);
    const link = screen.getByRole('link', { name: /Tài liệu/ });
    expect(link).toHaveAttribute('href', 'https://example.com/tai-lieu');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('KHÔNG render thẻ a cho URL javascript:', () => {
    wrap(<ExternalLink href="javascript:alert(1)">Nguy hiểm</ExternalLink>);
    expect(screen.queryByRole('link')).toBeNull();
    expect(screen.getByText('Nguy hiểm')).toBeInTheDocument();
  });

  it('KHÔNG render thẻ a cho URL data:', () => {
    wrap(<ExternalLink href="data:text/html,<script>1</script>">Nguy hiểm</ExternalLink>);
    expect(screen.queryByRole('link')).toBeNull();
  });
});

describe('CodeBlock', () => {
  it('render nội dung dưới dạng text, không phải HTML', () => {
    const payload = '<img src=x onerror=alert(1)>';
    const { container } = wrap(<CodeBlock content={payload} language="html" />);
    expect(screen.getByText(payload)).toBeInTheDocument();
    expect(container.querySelector('img')).toBeNull();
  });
});

describe('BulletList', () => {
  it('hiển thị thông báo khi rỗng', () => {
    wrap(<BulletList items={[]} />);
    expect(screen.getByText(/Chưa có nội dung/)).toBeInTheDocument();
  });

  it('hiển thị từng mục', () => {
    wrap(<BulletList items={['Mục một', 'Mục hai']} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});

describe('Chip', () => {
  it('hiển thị nội dung và tooltip', () => {
    wrap(<Chip title="Mức độ">Nâng cao</Chip>);
    expect(screen.getByTitle('Mức độ')).toHaveTextContent('Nâng cao');
  });
});

describe('hằng số cấu hình', () => {
  it('tuyên bố an toàn nêu đủ các loại mục tiêu được phép', () => {
    for (const phrase of ['sở hữu', 'phòng lab', 'testnet', 'safe harbor']) {
      expect(SAFETY_STATEMENT_VI.toLowerCase()).toContain(phrase.toLowerCase());
    }
  });

  it('có đủ chín quy tắc dừng', () => {
    expect(STOP_TESTING_RULES_VI).toHaveLength(9);
  });

  it('tên sản phẩm đến từ một nguồn duy nhất', () => {
    expect(PRODUCT.name).toBeTruthy();
    expect(PRODUCT.slug).toBe('bounty-atlas-vn');
  });
});
