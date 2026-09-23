#!/usr/bin/env python3
import json

with open('src/lib/drafts.json', 'r') as f:
    drafts = json.load(f)

new_draft = {
    'id': 'second-order-effect',
    'title': 'The Second-Order Effect: How Today\'s Features Become Tomorrow\'s Constraints',
    'category': 'Product Thinking',
    'excerpt': 'Every feature you ship is a decision about the future. Not just the future you intended — but the futures you accidentally locked yourself into.',
    'tags': ['second-order-effect', 'product-thinking', 'constraints', 'decision-making', 'feature-management'],
    'date': 'September 23, 2026',
    'filepath': '/Users/aksharjothi/jotpm/articles/second-order-effect.html',
    'status': 'pending_review',
    'image': None
}

drafts.append(new_draft)

with open('src/lib/drafts.json', 'w') as f:
    json.dump(drafts, f, indent=2)

print(f'Added draft. Total drafts: {len(drafts)}')
