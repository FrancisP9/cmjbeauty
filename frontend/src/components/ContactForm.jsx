import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../components/ui/form";
import { createLead } from "../api/client";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message trop court")
});

export const ContactForm = ({ className }) => {
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", phone: "", message: "" } });

  const onSubmit = async (values) => {
    try {
      await createLead(values);
      toast("Message envoyé. Nous vous recontactons rapidement.");
      form.reset();
    } catch (e) {
      toast("Erreur d'envoi. Réessayez.");
    }
  };

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl><Input placeholder="Votre nom" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input type="email" placeholder="vous@exemple.com" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone (optionnel)</FormLabel>
              <FormControl><Input placeholder="+32 ..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl><Textarea rows={4} placeholder="Votre demande..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <Button type="submit" className="rounded-none btn-rect btn-rect--gold w-full">Envoyer</Button>
        </form>
      </Form>
    </div>
  );
};