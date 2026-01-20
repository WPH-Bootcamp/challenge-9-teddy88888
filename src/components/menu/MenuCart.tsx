"use client";

import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAppDispatch } from "@/hooks/redux"; // Hook custom untuk dispatch
import { addToCart } from "@/features/cartSlice";
import { MenuItem } from "@/types";
import { formatRupiah } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const dispatch = useAppDispatch();

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-none bg-white">
      {/* Container Gambar dengan Overlay Hover */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <Badge className="absolute top-2 left-2 bg-white/90 text-black hover:bg-white">
          {item.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{item.name}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium text-muted-foreground">
              {item.rating}
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description}
        </p>
        <p className="text-xl font-bold text-primary">
          {formatRupiah(item.price)}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => dispatch(addToCart(item))}
          className="w-full gap-2 transition-all active:scale-95"
        >
          <Plus size={18} />
          Tambah ke Keranjang
        </Button>
      </CardFooter>
    </Card>
  );
}
