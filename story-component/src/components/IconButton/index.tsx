import "./index.scss";
interface IconButtonProps {
  width?: number;
  height?: number;
  /**
   * 아이콘 파일 경로
   */
  iconSrc: string;
  /**
   * 버튼 텍스트
   */
  label?: string;
  /**
   * 이미지 대체 텍스트
   */
  alt?: string;
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
}

export default function IconButton({
  width = 25,
  height = width,
  iconSrc,
  alt = "",
}: IconButtonProps) {
  return (
    <div className="iconButton">
      <img src={iconSrc} alt={alt} width={width} height={height} />
    </div>
  );
}
