'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import { TreeViewProps, TreeNode } from '../../../interface/atoms/tree-view/tree-view.types';
import { treeViewContainerVariants } from './tree-view.styles';
import { ChevronRight, ChevronDown, Folder, FolderOpen, File } from '@core-circle/icons';

interface TreeItemProps {
  node: TreeNode;
  level: number;
  selectedId?: string;
  onSelect?: (node: TreeNode) => void;
  showGuideLines?: boolean;
}

const TreeItem: React.FC<TreeItemProps> = ({
  node,
  level,
  selectedId,
  onSelect,
  showGuideLines,
}) => {
  const hasChildren = Boolean(node.children && node.children.length > 0);
  const [isOpen, setIsOpen] = React.useState<boolean>(node.defaultExpanded ?? false);

  const isSelected = selectedId === node.id;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      setIsOpen((prev) => !prev);
    }
    if (!node.disabled) {
      onSelect?.(node);
    }
  };

  const renderIcon = () => {
    if (node.icon) return node.icon;
    if (hasChildren) {
      return isOpen ? (
        <FolderOpen size={16} className="text-amber-500 shrink-0" />
      ) : (
        <Folder size={16} className="text-amber-500 shrink-0" />
      );
    }
    return <File size={16} className="text-slate-400 shrink-0" />;
  };

  return (
    <div className="flex flex-col w-full select-none">
      <div
        role="treeitem"
        aria-selected={isSelected}
        aria-expanded={hasChildren ? isOpen : undefined}
        onClick={handleToggle}
        style={{ paddingLeft: `${level * 16 + 4}px` }}
        className={cn(
          'flex items-center gap-2 py-1.5 pr-3 rounded-lg text-xs font-medium transition-colors cursor-pointer',
          isSelected
            ? 'bg-core-circle-primary/10 text-core-circle-primary font-semibold'
            : 'text-slate-700 hover:bg-slate-100',
          node.disabled && 'opacity-40 cursor-not-allowed hover:bg-transparent'
        )}
      >
        {/* Expand / Collapse Chevron */}
        <span className="w-4 h-4 flex items-center justify-center text-slate-400 shrink-0">
          {hasChildren && (
            isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />
          )}
        </span>

        {/* Node Icon */}
        <span className="shrink-0">{renderIcon()}</span>

        {/* Node Label */}
        <span className="truncate">{node.label}</span>
      </div>

      {/* Nested Children */}
      {hasChildren && isOpen && (
        <div
          className={cn(
            'flex flex-col w-full',
            showGuideLines && 'border-l border-slate-200 ml-5'
          )}
        >
          {node.children?.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              level={level + 1}
              selectedId={selectedId}
              onSelect={onSelect}
              showGuideLines={showGuideLines}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const TreeView = React.forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      className,
      data = [],
      selectedId: controlledSelected,
      onSelect,
      showGuideLines = true,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const [internalSelected, setInternalSelected] = React.useState<string | undefined>(
      undefined
    );

    const currentSelected = controlledSelected !== undefined ? controlledSelected : internalSelected;

    const handleSelect = (node: TreeNode) => {
      if (controlledSelected === undefined) setInternalSelected(node.id);
      onSelect?.(node);
    };

    return (
      <div
        {...props}
        ref={ref}
        role="tree"
        className={cn(treeViewContainerVariants({ variant }), className)}
      >
        <div className="flex flex-col gap-0.5">
          {data.map((node) => (
            <TreeItem
              key={node.id}
              node={node}
              level={0}
              selectedId={currentSelected}
              onSelect={handleSelect}
              showGuideLines={showGuideLines}
            />
          ))}
        </div>
      </div>
    );
  }
);

TreeView.displayName = 'TreeView';
export default TreeView;
